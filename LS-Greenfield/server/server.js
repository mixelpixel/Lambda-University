const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { User } = require('./models/User.js');
const { Post } = require('./models/Post.js');

const server = express();
server.use(bodyParser.json());

const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;

// routes for users
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

server.post('/users', (req, res) => {
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

server.get('/users/:id', (req, res) => {
  const { id } = req.params;
  User.find({_id: id}, (err, user) => {
    if (err) {
      res.status(STATUS_SERVER_ERROR);
      res.json({ error: 'we could not find the user' });
      return;
    }
    res.json(user);
  });
});

server.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  User.remove({_id: id}, (err, user) => {
    if (err) {
      res.status(STATUS_SERVER_ERROR);
      res.json({ error: 'the id provided does not match any in the db' })
      return;
    } else if (user.result.n === 0) {
      res.json({ error: 'user not found'})
      return;
    }
    res.json(user);
  });
});

// routes for blog
server.get('/posts', (req, res) => {
  Blog.find({}, (err, post) => {
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
  const post = new Blog({ title, contents });
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
  Blog.find({_id: id}, (err, post) => {
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
  Blog.updateOne({ _id: id }, updates, (err) => {
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
  Blog.remove({_id: id}, (err, post) => {
    if (err) {
      res.status(STATUS_SERVER_ERROR);
      res.json({ error: 'the id provided does not match any in the db' })
      return;
    } else if (post.result.n === 0) {
      res.json({ error: 'post not found'})
      return;
    }
    res.json(post);
  });
});

mongoose.Promise = global.Promise;
const connect = mongoose.connect(
  'mongodb://localhost/users',
  { useMongoClient: true }
);

connect.then(() => {
  const port = 3000;
  server.listen(port);
  console.log(`Server Listening on ${port}`);
}, (err) => {
  console.log('\n************************');
  console.log("ERROR: Couldn't connect to MongoDB. Do you have it running?");
  console.log('************************\n');
});
