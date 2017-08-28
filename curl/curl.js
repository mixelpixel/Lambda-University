const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const User = require('./user');

const STATUS_USER_ERROR = 422;
const BCRYPT_COST = 11;
const server = express();

server.use(bodyParser.json());

server.use(session({
  secret: 'e5SPiqsEtjexkTj3Xqovsjzq8ovjfgVDFMfUzSmJO21dtXs4re',
  // if you don't get these deprecation msgs, you can comment out lines 20 and 21
  // express-session deprecated undefined resave option; provide resave option src/server.js:13:12
  // express-session deprecated undefined saveUninitialized option; provide saveUninitialized option src/server.js:13:12
  // https://github.com/expressjs/session/issues/56
  // https://github.com/expressjs/session#options
  resave: true,
  saveUninitialized: false,
}));

// VIEW COUNTER
server.get('/view-counter', (req, res) => {
  const persistentSession = req.session;
  if (!persistentSession.viewCount) {
    persistentSession.viewCount = 0;
  }
  persistentSession.viewCount++;
  res.json({ viewCount: persistentSession.viewCount });
});

// HELPER FUNCTION
const sendUserError = (err, res) => {
  res.status(STATUS_USER_ERROR);
  if (err && err.message) {
    res.json({ message: err.message, stack: err.stack });
  } else {
    res.json({ error: err });
  }
};
// LOCAL MIDDLEWARE
const validateNameAndPassword = ((req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    sendUserError('Please enter BOTH a USERNAME and a PASSWORD.', res);
    return;
  }
  next();
});
// POST A NEW USER
server.post('/users', validateNameAndPassword, (req, res) => {
  const { username, password } = req.body;
  const passwordHash = bcrypt.hashSync(password, BCRYPT_COST, (err, hash) => {
    if (err) {
      sendUserError({ 'There is omething weird with that password': err.message, 'ERROR STACK': err.stack }, res);
      return;
    }
  });
  const newUser = new User({ username, passwordHash });
  newUser.save((error, user) => {
    if (error) {
      // https://youtu.be/frIA7tuBqqY
      sendUserError({ 'Jigga What? Jigga Who???': error.message, 'ERROR STACK': error.stack }, res);
      return;
    }
    res.json(user);
  });
});
// LOG IN AFTER MAKING A NEW USER
server.post('/log-in', validateNameAndPassword, (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        sendUserError('Who are you??? Please go to /users and create an account', res);
      } else {
        bcrypt.compare(password, user.passwordHash, (error, isValid) => {
          if (error) {
            sendUserError(error, res);
            return;
          }
          if (!isValid) {
            sendUserError('That password just aint right!', res);
          } else {
            req.session.user = user;
            res.json({ success: true });
          }
        });
      }
    })
    .catch((err) => {
      sendUserError(err, res);
    });
});
// LOCAL MIDDLEWARE
const userAuthMiddleware = (req, res, next) => {
  if (req.session.user === undefined) {
    sendUserError('yoYOyo-yo!!! You gots to LOG IN, bruh!!!', res);
  } else {
    req.user = req.session.user;
    next();
  }
};
// VERIFY LOGGED IN USER
server.get('/me', userAuthMiddleware, (req, res) => {
  res.json(req.user);
});

mongoose.Promise = global.Promise;
const connect = mongoose.connect(
  'mongodb://localhost/users',
  { useMongoClient: true }
);
/* eslint no-console: 0 */
connect.then(() => {
  const port = 3000;
  server.listen(port);
  console.log(`Server Listening on ${port}`);
}, (err) => {
  console.log('\n************************');
  console.log("ERROR: Couldn't connect to MongoDB.");
  console.log('ERROR: Do you have it running?????');
  console.log('************************\n');
});
