const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 3030;
const server  = express();

const corsOptions = {
    "origin": "*",
    "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
};

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/blog-posts', { useMongoClient: true });

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.use(cors());

server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const routes = require('./api/routes/routes');
routes(server);

server.listen(port, () => {
  console.log(`YESIRREEEE, the ol' server up and running on ${port}!!!`);
});

/*
Compare to LS-Mongo-II-Mini

See also my solution for LS-Auth

So it's a bit harder with LS-Mongo-II, since the connection happens in `src/post.js`.
We do this because we can re-use the connection across both `src/app.js` and the tests.
To add that piece of functionality, what you could do is export out the return
value of `mongoose.connect()` (i.e. the returned promise) from `src/post.js` alongside
the actual `Post` model. Then you could access that promise inside `app.js` and
call `.then()` just like in the snippet you posted.
*/
