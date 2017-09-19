/* #################################
*  EXPRESS SETUP
*  ################################# */
const express = require('express');

const server = express();

/* #################################
*  MONGO DATABASE SETUP
*  ################################# */
const mongoose = require('mongoose');

const { User } = require('./models/User.js');
const { Post } = require('./models/Post.js');


/* #################################
*  ENDPOINT SETUP
*  ################################# */
const bodyParser = require('body-parser');

server.use(bodyParser.json());

const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;

/* #################################
*  INDEX ROUTE
*  ################################# */

server.get('/', (request, response) => {
  response.send('Hello World!\n');
});

server.get('/version', (request, response) => {
  response.send('1.0.0\n');
});

/* #################################
*  HELPER FUNCTIONS
*  ################################# */

// const sendUserError = (err, res) => {
//   res.status(STATUS_USER_ERROR);
//   if (err && err.message) {
//     res.json({ message: err.message, stack: err.stack });
//   } else {
//     res.json({ error: err });
//   }
// };
// const sendServerError = (err, res) => {
//   res.status(STATUS_SERVER_ERROR);
//   if (err && err.message) {
//     res.json({ message: err.message, stack: err.stack });
//   } else {
//     res.json({ error: err });
//   }
// };

/* #################################
*  ROUTES FOR USERS
*  ################################# */

server.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(STATUS_USER_ERROR);
      res.json(err);
    } else {
      res.json(users);
    }
  });
});

server.post('/user', (req, res) => {
  const { username } = req.body;
  if (!username) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'please provide a username' });
    return;
  }
  const user = new User({ username });
  user.save((err) => {
    if (err) {
      res.status(STATUS_SERVER_ERROR);
      res.json({ error: 'there has been an internal server error' });
      return;
    }
    res.json({ user });
  });
});

server.get('/user/:id', (req, res) => {
  const { id } = req.params;
  User.find({ _id: id }, (err, user) => {
    if (err) {
      res.status(STATUS_SERVER_ERROR);
      res.json({ error: 'we could not find the user' });
      return;
    }
    res.json(user);
  });
});

server.delete('/user/:id', (req, res) => {
  const { id } = req.params;
  User.remove({ _id: id }, (err, user) => {
    if (err) {
      res.status(STATUS_SERVER_ERROR);
      res.json({ error: 'the id provided does not match any in the db' });
      return;
    } else if (user.result.n === 0) {
      res.json({ error: 'user not found' });
      return;
    }
    res.json(user);
  });
});

/* #################################
*  ROUTES FOR BLOG POSTS
*  ################################# */
server.get('/posts', (req, res) => {
  Post.find({}, (err, post) => {
    if (err) {
      res.status(STATUS_USER_ERROR);
      res.json(err);
    } else {
      res.json(post);
    }
  });
});

server.post('/posts', (req, res) => {
  const { title, contents } = req.body;
  if (!title || !contents) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'please provide title and contents' });
    return;
  }
  const post = new Post({ title, contents });
  post.save((err) => {
    if (err) {
      res.status(STATUS_SERVER_ERROR);
      res.json({ error: 'there has been an internal server error' });
      return;
    }
    res.json(post);
  });
});

server.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  Post.find({ _id: id }, (err, post) => {
    if (err) {
      res.status(STATUS_SERVER_ERROR);
      res.json({ error: 'we could not find the blog post' });
      return;
    }
    res.json(post);
  });
});

server.put('/posts', (req, res) => {
  res.json({ error: 'Please append an ID# to /posts/#.' });
});

server.put('/posts/:id', (req, res) => {
  const { id } = req.params;
  const { title, contents } = req.body;
  const updates = { title, contents };
  if (!title) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'Please modify the TITLE.' });
    return;
  }
  if (!contents) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'Please modify the CONTENTS too.' });
    return;
  }
  Post.updateOne({ _id: id }, updates, (err) => {
    if (err) {
      res.status(STATUS_SERVER_ERROR);
      res.json(`There is no: ${err.value}`);
    } else {
      res.json(updates);
    }
  });
});

server.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  Post.remove({ _id: id }, (err, post) => {
    if (err) {
      res.status(STATUS_SERVER_ERROR);
      res.json({ error: 'the id provided does not match any in the db' });
      return;
    } else if (post.result.n === 0) {
      res.json({ error: 'post not found' });
      return;
    }
    res.json(post);
  });
});

/* #################################
*  MONGO DATABASE CONNECTION
*  ################################# */

/* eslint no-console: 0 */
mongoose.Promise = global.Promise;
const connect = mongoose.connect('mongodb://localhost/users', { useMongoClient: true }, (err) => {
  if (err) return console.log('\nyoYOyo-yo!!! WTF, yo??????\n', err);
  console.log('DUDE! You are like totally connected to the BLOG DataBase, man!\nLike, all your chakras are, like, totally... cool...\ny\'know, like: lined up and in balance, man... Whoa.\n');
});

/* #################################
*  SERVER!
*  ################################# */

connect.then(() => {
  const PORT = 3000;
  const HOST = '0.0.0.0';
  server.listen(PORT);
  console.log(`Ye Ol' Server is listening on ${PORT}`);
}, (err) => {
  console.log('\n************************');
  console.log("ERROR: Couldn't connect to MongoDB.\nDo you have it running?");
  console.log('************************\n');
});
