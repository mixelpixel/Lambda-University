require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const request = require('request');
const mongodb = require('mongodb');
const port = process.env.PORT || 5001;
const Airtable = require('airtable');
const slackModel = require('./slackModel');
const slackSearch = require('./search');
const axios = require('axios');
const qs = require('querystring');
const debug = require('debug')('slash-command-template:index');
const users = require('./users.js');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const readline = require('readline');
const google = require('googleapis');
const util = require('util');
const googleAuth = require('google-auth-library');
const opn = require('opn');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const passport = require('passport');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com/v0/appMs812ZOuhtf8Un/Table%201',
  apiKey: process.env.AIR_TABLE_KEY
});
let base = Airtable.base('appMs812ZOuhtf8Un');

const server = express();

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/arc_hive', {useMongoClient: true});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

/*=======================================================================
=========================================================================
* AIRTABLE ROUTES
=========================================================================
========================================================================*/

/*************************************************************************
* =============AIRTABLE QUERY-GET ROUTE==============
* -This route is triggered when the 'create' function in search.js sends
* an HTTP request containing the search parameters
**************************************************************************/
server.get('/', (req, res) => {
  console.log('49: ' + yt_token);
  let tagVal = req.body.tags;
  let cohortVal = req.body.cohort;
  const brownBagVal = req.body.brownbag;
  let sortParam = 'asc'
  if (req.body.sort) {
    sortParam = req.body.sort;
  }
  if (tagVal) {
    tagVal = tagVal.toUpperCase();
  }
  if(cohortVal) {
    cohortVal = cohortVal.toUpperCase();
  }
  const path = {
    allRec: 'https://api.airtable.com/v0/appMs812ZOuhtf8Un/tblWIvD0du6JQqdlx?filterByFormula=',
    onlyBrownBags: 'IF(Brownbag%2C+Link)',
    noBrownBags: 'IF(NOT(Brownbag)%2C+Link)',
    cohort: 'OR(IF(FIND(%22' + cohortVal + '%22%2C+ARRAYJOIN(Cohort%2C+%22+%22))%2C+Link)%2C+IF(FIND(%22all%22%2C+ARRAYJOIN(Cohort%2C+%22+%22))%2C+Link))',
    tags: 'IF(FIND(%22' + tagVal + '%22%2C+ARRAYJOIN(Tags%2C+%22+%22))%2C+Link)',
    sort: '&sort%5B0%5D%5Bfield%5D=Created&sort%5B0%5D%5Bdirection%5D=' + sortParam
  };
  const pathArray = [];
  let url = path.allRec;
  if (tagVal) {
    pathArray.push(path.tags);
  }
  if (cohortVal) {
    pathArray.push(path.cohort);
  }
  if (brownBagVal) {
    pathArray.push(path[brownBagVal]);
  }
  if (pathArray.length === 1) {
    url += pathArray[0];
  } else if (pathArray.length > 1) {
    url += 'AND(' + pathArray.join('%2C+') + ')';
  }

  // console.log(url);
  const g = {
    method: 'GET',
    uri: url + path.sort,
    headers: {
      Authorization: process.env.AIR_TABLE_KEY,
      'content-type': 'application/json',
    },
    json: true
  };
  request(g, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    if (sortParam === 'asc') {
      sortParam = 'oldest to newest';
    } else {
      sortParam = 'newest to oldest'
    }
    const sendToSlack = {
      Records: body.records,
      userId: req.body.userId,
      tags: tagVal,
      cohort: cohortVal,
      brownbag: brownBagVal,
      sortParam: sortParam
    };
    // console.log(sendToSlack);
    slackSearch.sendConfirmation(sendToSlack);
    res.send(body);
  });
});

/*************************************************************************
* =============AIRTABLE CREATE-POST ROUTE==============
**************************************************************************/
server.post('/', (req, res) => {
  console.log(JSON.stringify(req.body));
  let brownbag = null;
  let cohort = ['N/A'];
  let tags = ['N/A'];
  let link = req.body.arcLink;
  if (req.body.cohort) {
    cohort = req.body.cohort.toUpperCase().split(', ');
  }
  if (req.body.arcTime) {
    link += '?t=' + req.body.arcTime;
  }
  if (req.body.tags) {
    tags = req.body.tags.toUpperCase().split(', ');
  }
  if (req.body.brownbag) {
    brownbag = true;
  }
  const p = {
    method: 'POST',
    uri: 'https://api.airtable.com/v0/appMs812ZOuhtf8Un/Table%201',
    headers: {
      Authorization: process.env.AIR_TABLE_KEY,
      'content-type': 'application/json',
    },
    body: {
      "fields": {
        Link: link,
        Title: req.body.arcTitle,
        Cohort: cohort,
        Tags: tags,
      }
    },
    json: true
  };
  request(p, (error, response, body) => {
    if (error) {
      console.log('HI I AM AN ERROR')
      console.log(error);
      return;
    }
     console.log('server 158 Response: ' + JSON.stringify(response));
     console.log('server 159 Body: ' + JSON.stringify(body));

    if (body.error) {
      const errorData = {
        error: body.error,
        user: req.body.userId
      }
      slackSearch.airTableError(errorData);
    } else {
      slackSearch.arcConfirmation(req.body);
    }
    res.send(JSON.stringify(body));
  });
});

/*=======================================================================
=========================================================================
* SLACK ROUTES
=========================================================================
========================================================================*/

/*************************************************************************
* =============SLACK COMMANDS-POST ROUTE==============
**************************************************************************/
server.post('/commands', (req, res) => {
  // extract the verification token, slash command text,
  // and trigger ID from payload
  const { token, text, trigger_id } = req.body;

  // check that the verification token matches expected value
  if (token === process.env.SLACK_VERIFICATION_TOKEN) {
    // create the dialog payload - includes the dialog structure, Slack API token,
    // and trigger ID
    const dialog = {
      token: process.env.SLACK_ACCESS_TOKEN,
      trigger_id,
      dialog: JSON.stringify({
        title: 'LS Videos',
        callback_id: 'submit-search',
        submit_label: 'Submit',
        elements: [
          {
            label: 'Tags',
            type: 'text',
            name: 'tags',
            optional: true,
            hint: 'Enter a single tag e.g. brownbag, code challenge, js, auth, react ...'
          },
          {
            label: 'Cohort',
            optional: true,
            type: 'text',
            name: 'cohort',
            hint: 'Enter a single cohort e.g. CS1 or CS2. To get all videos regardless of cohort leave this field blank.'
          },
          /* {
            label: 'Brownbag?',
            optional: true,
            type: 'select',
            name: 'brownbag',
            options: [
              { label: 'Only Brownbags', value: 'onlyBrownBags' },
              { label: 'No Brownbags', value: 'noBrownBags' },
            ]
          }, */
          {
            label: 'Sorted By',
            optional: true,
            type: 'select',
            name: 'sort',
            value: 'asc',
            options: [
              { label: 'Newest First', value: 'desc' },
              { label: 'Oldest First', value: 'asc' },
            ]
          },
        ],
      }),
    };

    // open the dialog by calling dialogs.open method and sending the payload
    axios.post('https://slack.com/api/dialog.open', qs.stringify(dialog))
      .then((result) => {
        debug('dialog.open: %o', result.data);
        res.send('');
      }).catch((err) => {
        debug('dialog.open call failed: %o', err);
        res.sendStatus(500);
      });
  } else {
    debug('Verification token mismatch');
    res.sendStatus(500);
  }
});

/*************************************************************************
* ==============SLACK INTERACTIVE-COMPONENT-POST ROUTE==============
**************************************************************************/
server.post('/interactive-component', (req, res) => {
  const body = JSON.parse(req.body.payload);

  // check that the verification token matches expected value
  if (body.token === process.env.SLACK_VERIFICATION_TOKEN) {
    debug(`Form submission received: ${body.submission.trigger_id}`);

    // immediately respond with a empty 200 response to let
    // Slack know the command was received
    res.send('');

    // create Helpdesk ticket
    slackSearch.create(body.user.id, body.submission);
  } else {
    debug('Token mismatch');
    res.sendStatus(500);
  }
});

/*************************************************************************
* ==============SLACK ARCCOMMANDS-POST ROUTE==============
**************************************************************************/
server.post('/arcCommands', (req, res) => {
  // extract the verification token, slash command text,
  // and trigger ID from payload
  const { token, text, trigger_id, user_id } = req.body;

  const findUser = (userId) => {

    const fetchUserName = new Promise((resolve, reject) => {
      users.find(userId).then((result) => {
        debug(`Find user: ${userId}`);
        resolve(result.data.user.profile.real_name);
      }).catch((err) => { reject(err); });
    });

    fetchUserName.then((result) => {
      openDialog(result);
      return;
    }).catch((err) => { console.error(err); });
  };

  findUser(user_id);
  // check that the verification token matches expected value
  const openDialog = (userName) => {
    if (token === process.env.SLACK_VERIFICATION_TOKEN) {
      // create the dialog payload - includes the dialog structure, Slack API token,
      // and trigger ID
      const dialog = {
        token: process.env.SLACK_ACCESS_TOKEN,
        trigger_id,
        dialog: JSON.stringify({
          title: 'LS Videos',
          callback_id: 'submit-search',
          submit_label: 'Submit',
          elements: [
            {
              label: 'Enter video link here',
              type: 'text',
              name: 'arcLink',
              value: text,
            },
            {
              label: 'Enter video title',
              type: 'text',
              name: 'arcTitle',
              value: `[Title] by ${userName}`,
              hint: 'Replace "[Title]" with your title',
            },
            {
              label: 'Password',
              type: 'text',
              name: 'password',
            },
            {
              label: 'Tags',
              type: 'text',
              name: 'tags',
              optional: true,
              hint: 'Add tags separated by a comma. Ex: React, Redux, Brownbag',
            },
            {
              label: 'Cohort',
              type: 'text',
              name: 'cohort',
              optional: true,
              hint: 'Entering multiple cohorts is the same as entering multiple tags. To add all cohorts enter "all".'
            },
            // {
            //   label: 'Brownbag?',
            //   optional: true,
            //   type: 'select',
            //   name: 'brownbag',
            //   options: [
            //     { label: 'Yes', value: true },
            //   ]
            // }
          ],
        }),
      };

      axios.post('https://slack.com/api/dialog.open', qs.stringify(dialog))
        .then((result) => {
          debug('dialog.open: %o', result.data);
          res.send('');
        }).catch((err) => {
          debug('dialog.open call failed: %o', err);
          res.sendStatus(500);
        });
    } else {
      debug('Verification token mismatch');
      res.sendStatus(500);
    }
  }
});

/*************************************************************************
* ==============SLACK ARCCOMMANDS-POST ROUTE==============
**************************************************************************/
server.post('/timestamp', (req, res) => {
  const { token, text, trigger_id, user_id } = req.body;

  const findUser = (userId) => {

    const fetchUserName = new Promise((resolve, reject) => {
      users.find(userId).then((result) => {
        debug(`Find user: ${userId}`);
        resolve(result.data.user.profile.real_name);
      }).catch((err) => { reject(err); });
    });

    fetchUserName.then((result) => {
      openDialog(result);
      return;
    }).catch((err) => { console.error(err); });
  };

  findUser(user_id);

  const openDialog = (userName) => {
    if (token === process.env.SLACK_VERIFICATION_TOKEN) {
      const dialog = {
        token: process.env.SLACK_ACCESS_TOKEN,
        trigger_id,
        dialog: JSON.stringify({
          title: 'add a timestamp',
          callback_id: 'submit-search',
          submit_label: 'Submit',
          elements: [
            {
              label: 'Video Link',
              type: 'text',
              name: 'arcLink',
              value: text,
            },
            {
              label: 'Video Title',
              type: 'text',
              name: 'arcTitle',
            },
            {
              label: 'Password',
              type: 'text',
              name: 'password'
            },
            // {
            //   label: 'Instructor',
            //   type: 'text',
            //   name: 'arcInstructor',
            //   value: userName,
            // },
            {
              label: 'Enter time',
              type: 'text',
              name: 'arcTime',
              hint: 'e.g. 1h2m35s'
            },
            {
              label: 'Tags',
              type: 'text',
              name: 'tags',
            },
          ],
        }),
      };

      axios.post('https://slack.com/api/dialog.open', qs.stringify(dialog))
        .then((result) => {
          debug('dialog.open: %o', result.data);
          res.send('');
        }).catch((err) => {
          debug('dialog.open call failed: %o', err);
          res.sendStatus(500);
        });
    } else {
      debug('Verification token mismatch');
      res.sendStatus(500);
    }
  };
});

/*=======================================================================
=========================================================================
* ZOOM ROUTES
=========================================================================
========================================================================*/

/*************************************************************************
* ==============ZOOM CREATE ROUTE==============
**************************************************************************/

server.post('/zoom', (req, res) => { // Changed get to post
  const payload = {
    "iss": process.env.ZOOM_KEY,
    "exp": Math.floor(Date.now() / 1000) + (60 * 60)
  };
  const token = jwt.sign(payload, process.env.ZOOM_SECRET);
  const z = {
    method: 'POST',
    uri: 'https://api.zoom.us/v2/users/' + req.body.zoomEmail + '/meetings',
    headers: {
      Authorization: 'Bearer' + token,
      "alg": 'HS256',
      "typ": 'JWT',
    },
    body: {
      "topic": req.body.topic,
      "type": 1,
      "host_id": "268933",
      "settings": {
        "auto_recording": "cloud",
      },
    },
    json: true
  };
  request(z, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    const zoomData = {
      cohort: req.body.cohort,
      zoomLink: body.join_url
    }
    slackSearch.startZoom(zoomData);
    res.send(response);
  });
  // res.send('ZOOM ZOOM');
});

/*************************************************************************
* ==============ZOOM-SLACK ROUTE==============
**************************************************************************/

server.post('/slackzoom', (req, res) => {
  const { token, text, trigger_id } = req.body;

  if (token === process.env.SLACK_VERIFICATION_TOKEN) {
    const dialog = {
      token: process.env.SLACK_ACCESS_TOKEN,
      trigger_id,
      dialog: JSON.stringify({
        title: 'Start a zoom meeting',
        callback_id: 'submit-search',
        submit_label: 'Submit',
        elements: [
          {
            label: 'Title of lecture',
            type: 'text',
            name: 'topic',
            value: text,
          },
          {
            label: 'Zoom email address',
            type: 'text',
            name: 'zoomEmail',
          },
          {
            label: 'Password',
            type: 'text',
            name: 'password',
          },
          {
            label: 'Cohort',
            type: 'text',
            name: 'cohort',
          },
          {
            label: 'Tags',
            optional: true,
            type: 'text',
            name: 'tags',
          },
        ],
      }),
    };

    axios.post('https://slack.com/api/dialog.open', qs.stringify(dialog))
      .then((result) => {
        debug('dialog.open: %o', result.data);
        res.send('');
      }).catch((err) => {
        debug('dialog.open call failed: %o', err);
        res.sendStatus(500);
      });
  } else {
    debug('Verification token mismatch');
    res.sendStatus(500);
  }
});

/*************************************************************************
* ==============ZOOM-RECORDING ROUTE==============
**************************************************************************/
let yt_token;

server.post('/recordings', (req, res) => {
  // Sample nodejs code for videos.insert
  const SCOPES = ['https://www.googleapis.com/auth/youtube.force-ssl', 'https://www.googleapis.com/auth/youtube.upload'];
  console.log('586: ' + yt_token);


  const videosInsert = (oAuthTravler, requestData) => {
    console.log('596 RequestData: ' + requestData);
    const service = google.youtube('v3');
    const parameters = requestData['params'];
    parameters['auth'] = oAuthTravler;
    parameters['media'] = { body: fs.createReadStream(requestData['mediaFilename']) };
    parameters['notifySubscribers'] = false;
    parameters['resource'] = requestData['properties'];
    const req = service.videos.insert(parameters, ((err, data) => {
      if (err) {
        console.log('The API returned an error: ' + err);
      }
      if (data) {
        console.log(util.inspect(data, false, null));
      }
      process.exit();
    }));
  };

  const params = {
    'params': {
      'part': 'snippet,status'
    },
    'properties': {
      'snippet.categoryId': '22',
      // 'snippet.defaultLanguage': '',
      'snippet.description': 'Lambda School Lecture',
      // 'snippet.tags[]': '',
      'snippet.title': 'Mongo III',
      // 'status.embeddable': '',
      // 'status.license': '',
      'status.privacyStatus': 'unlisted',
      // 'status.publicStatsViewable': ''
      },
      'mediaFilename': 's3://zoom-cmr/cmr/replay/2017/12/19/205210934/58B0368B-32C1-4B2C-AC2A-0DD163AB9FC0/GMT20171219-194245_JSON-V_1280x800.mp4',
    };

  videosInsert(oAuthTravler, params);
  res.send('It probably worked');
});

server.get('/recordings', (req, res) => {
  // console.log('GET');
  // console.log(req.params);
  // console.log(req.query.code);
  // youtube_code = req.query.code;
  res.send(req.query.code);
});

/*=======================================================================
=========================================================================
* AUTH ROUTES
=========================================================================
========================================================================*/
let oAuthTravler;
/*************************************************************************
* ==============INITIAL YOUTUBE AUTH ROUTE==============
**************************************************************************/
server.get('/auth', (req, res) => {
  const SCOPES = ['https://www.googleapis.com/auth/youtube.force-ssl', 'https://www.googleapis.com/auth/youtube.upload'];
  const creds = {
    client_secret: process.env.YOUTUBE_CLIENT_SECRET,
    client_id: process.env.YOUTUBE_CLIENT_ID,
    redirect_uri: 'https://pacific-waters-60975.herokuapp.com/auth-confirmation',
  };

  const authorize = (credentials) => {
    const clientSecret = credentials.client_secret;
    const clientId = credentials.client_id;
    const redirectUrl = credentials.redirect_uri;
    const auth = new googleAuth();
    oAuthTraveler = new auth.OAuth2(clientId, clientSecret, redirectUrl);
    getNewToken(oAuthTraveler);
  };
  const getNewToken = (oAuthTraveler) => {
    const authUrl = oAuthTraveler.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES
    });
    opn(authUrl, {app: 'google chrome'});
    res.redirect(authUrl);
  };
  authorize(creds);
});

server.get('/auth-confirmation', (req, res) => {
  const code = req.query.code;

  const receiveToken = (code) => {
    oAuthTraveler.getToken(code, ((err, token) => {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      console.log(token);
      oAuthTraveler.credentials = token;
      yt_token = token;
    }));
  };

  receiveToken(code);
  res.send(yt_token);
});

server.get('/success', (req, res) => {
    res.send('YAAAAAAAAAAAAAAYYYYYYYYYYYYY');
});

server.get('/fail', (req, res) => {
  res.send('FAIL FAIL FAIL');
});


server.listen(port, () => {
  console.log(`Servs up dude ${port}`);
});

/*
const MONGO_URL = 'mongodb://arc_hive_admin:arc hive 555@ds013475.mlab.com:13475/arc_hive_testdb';

MongoClient.connect(MONGO_URL, (err, db) => {
  if (err) {
    return console.log(err);
  }

  // Do something with db here, like inserting a record
  db.collection('arc_hive_testdb').insertOne(
    {
      text: 'Hopefully this works!'
    },
    function (err, res) {
      if (err) {
        db.close();
        return console.log(err);
      }
      // Success
      db.close();
    }
  )
});
*/
