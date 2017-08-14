# Lambda University - August 14, 2017: Day 030, Monday
## Coding Challenge #26
- "Blue Squares" available in https://github.com/ryanhca/CS1-Code-Challenges/tree/master/blueSquares
***
Ben Nelson
Karthik Viswanathan
Ryan Hamblin
Tai Chulikavit
Sean Chen
Emily Sperry
Christine Gierer
GUEST LECTURER
NO_VIDEO_RECORDED
***
# [1st Lecture](https://youtu.be/FAbIdzLePUA) w/Tai Chulikavit: Review Code Challenge #25: linkedListCycles
***
# [2nd Lecture](NO_VIDEO_RECORDED) w/Karthik Viswanathan: node-express Lab Review
***
# [3rd Lecture](https://youtu.be/kE3poobSJAk) w/Karthik Viswanathan: node-express Lab Solution
***
#### LUNCH
***
# [4th Lecture](https://youtu.be/mc26S-0FeSA) w/Ryan Hamblin: Mongo DB intro & mini-sprint
- minisprint: https://github.com/LambdaSchool/mongo-I-mini/tree/master
- adding a persistent layer to server side magic
- databases!
- MongoDB is fairly new. It is a JSON Data Base
- Non-SQL (like MySQL is a "relational" or "tabular" style DB)
- MongoDB uses "PSON" but the user interacts with JSON.
- readable methods, e.g. .find() & .save() to find and save db info
- Install MongoDB with homebrew & using `mongod`
- https://www.mongodb.com/download-center?jmp=nav#community
- db.bears.find().pretty() makes it look pretty
- https://docs.mongodb.com/manual/mongo/
- MONGO vs. MONGOOSE (An ORM)
- add start: nodemon server.js to package.json scripts
- use models.js for DB mapping
  - sending "typed" data
  - defining the SCHEMA modelling what our data will look like
  - models.js "// we define our schema here"
- server needs to be set up for MONGOOSE
  - `const mongoose = require('mongoose');`
- use mongoose to connect to a DB
  - `mongoose.connect('mongodb://localhost/todos', { useMongoClient: true })`
- also need bodyParser bodyParser require & `server.use(bodyParser.json());`
- use mongo client (?)
- models.js: import mongoose
- instantiating mogoose style schema
  - `const Schema = mongoose.schema;`
  - e.g. { "text": "Todo Name", "completed": false, "tags": ["hot priority", etc...] }
  ```js
  const Todos = new Schema({
    text: {
      type: String,
      // Required: 'TOTO needs a text'
    },
    completed: {
      // type: Boolean,
      type: String,
    },
    created_at: {
      type: Date,
      default: Date.now,
    }
    // status: {
    //   type: [{
    //     type: String,
    //     enum: [ 'pending', 'completed', 'future' ]
    //     default: [ 'pending' ],
    //   }]
    // }
  });
  ```

  - `module.exports = mongoose.model('todos', Todos);`
  - in server.js `const Todos = require('./models.js');`
- POST
  ```js
  server.post('/todos', (req, res) => {
    const{ text, completed } = req.body;
    if (!text || !completed ) {
      // throw err;
      res.status(422);
      res.json({ error: 'Your todo is missing text or completed field' });
      return;
    }
    const todo = new Todos({ text, completed });
    todo.save((err) => {
      if (err) throw error;
      res.json(todo);
    });
  });
  ```

- GET note the unique id's - can be used as a request parameter
  ```js
  server.get('./todos', (req, res) => {
    Todos.find({}, (err, data) => {
      if (err) throw err;
      return;
    });
  })
  ```

- http://localhost:3000/todos/uniqueid_numbers
```js
server.get('/todos/:id', () => {
  const { id } = request.params
  Todos.findById(id, (err, todo) => {
    if (err) throw err;
    res.json(todos);
  });
});
```

- find (get a list of all)
- find single item by id w/request params

***
# [5th Lecture](VIDEO_RECORDED_NOT_POSTED) w/Speaker: topic
***
# Sprint / Q&A
***
# fin
