# Lambda University - September 05, 2017: Day 045, Tuesday
## Coding Challenge #41
- "Reverse Linked List" available in https://repl.it/student/submissions/1489170
***
# [1st Lecture](https://youtu.be/vY7Azkz6xwc) w/Tai Chulikavit: Review Code Challenge #41: reverseLinkedList
- https://repl.it/student/submissions/1489170

***
# [2nd Lecture](NO_VIDEO_RECORDED) w/Sean Chen: LS-Client-Auth review
- https://docs.google.com/document/d/1rpiPDUx7awfDmN_i_i5HyeYdluV6t5FhIMJCRqALPak/edit

***
# [3rd Lecture](https://youtu.be/GfA1MOVnXCo) w/Sean Chen: LS-Client-Auth solution
- set up cors() options for JWT server?
- all additional middleware constructed w/outside libraries
- extra credit review

***
#### LUNCH
***
# [4th Lecture](https://youtu.be/otSW2ZpBa2U) w/Ben Nelson: Documentation and TDD
- https://developer.github.com/v3/git/commits/ example
- A.P.I. = Application Programming Interface
- R.E.S.T. = REpresentational State Transfer
- markdown doc to list routes, write out info about endpoints for API, then write tests, then write code

## [@11m57s](https://youtu.be/otSW2ZpBa2U?t=11m57s) The Workflow

## [@16m35s](https://youtu.be/otSW2ZpBa2U?t=16m35s) Building the server

## [@36m46s](https://youtu.be/otSW2ZpBa2U?t=36m46s) Writing the tests

- make an app.js file and `npm init`
- using mocha and jai (or jest)
- mongoose express body-parser mocha chai sinon chai-http
- make a server.js file
- get db running...
- app.js
```js
const mongoose = require('mongoose');
const server = require('./server');

mongoose.connect('mongodb://localhost/food', {}, (err) => {
  if (err) return console.log(err);
  console.log('connected to food DB');
});

server.listen(8080, () => {
  console.log('server listening on port 8080');
});
```

- server.js
```js
const express = require('express');
const bodyParser = require('body-parser');
const Food = require('./food');

const server = express();
server.use(bodyParser.json());

server.get('/food', (req, res) => {
  Food.find({}, (err, food) => {
    if (err) return res.send(err);
    res.send(food);
  });
});

server.post('/food', (req, res) => {
  const food = new Food(req.body);
  food.save((err, newFood) => {
    if (err) return res.send(err);
    res.send(newFood);
  });
});

module.exports = server;
```

- food.js
```js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const FoodSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

FoodSchema.methods.getName = function() {
  return this.name;
};

FoodSchema.statics.getAllFoods = function(cb) {
  Food.find({}, (err, food) => {
    if (err) return cb(err);
    cb(food);
  });
};

const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;
```

- routes.test.js
```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Food = require('./food');
const server = require('./server');

const chai = require('chai');
const expect = chai.expect;
const chaiHTTP = require('chai-http');

chai.use(chaiHTTP);

describe('/food', () => {
  beforeEach((done) => {
    Food.remove({}, (err) => {
      if (err) console.log(err);
      done();
    });
  });

  describe('[GET] /food', () => {
    it('should get all of the food', (done) => {
      chai.request(server)
        .get('/food')
        .end((err, res) => {
          if (err) return console.log(err);
          expect(res.status).to.equal(200);
          expect(Array.isArray(res.body)).to.equal(true);
          expect(res.body.length).to.equal(0);
          done();
        });
    });
  });

  describe('[POST] /food', () => {
    it('should add a new food', (done) => {
      const food = {
        name: 'Hot Dog'
      };

      chai.request(server)
        .post('/food')
        .send(food)
        .end((err, res) => {
          if (err) return console.log(err);
          expect(res.status).to.equal(200);
          expect(res.body.name).to.equal('Hot Dog');
          done();
        });
    });
  });
});

```

- mocha tests, package.json:
```json
{
  "name": "server-testing",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "mocha *.test.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.17.2",
    "chai": "^4.1.2",
    "chai-http": "^3.0.0",
    "express": "^4.15.4",
    "mocha": "^3.5.0",
    "mongoose": "^4.11.10",
    "sinon": "^3.2.1"
  }
}

```

- models.test.js
```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Food = require('./food');

const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');

describe('Food', () => {
  describe('#getName()', () => {
    it('should return the name of the food', () => {
      const food = new Food({
        name: 'Rib Steak'
      });
      expect(food.getName()).to.equal('Rib Steak');
    });
    it('should return a string', () => {
      const food = new Food({
        name: 'Rib Steak'
      });
      expect(typeof food.getName()).to.equal('string');
    });
  });

  describe('#getAllFoods()', () => {
    it('should return all the foods', () => {
      sinon.stub(Food, 'find');
      Food.find.yields(null, [{ name: 'pumpkin pie'}]);
      Food.getAllFoods((foods) => {
        expect(foods.length).to.equal(1);
        expect(foods[0].name).to.equal('pumpkin pie');
        Food.find.restore();
      });
    });
  });
});
```

***
# [5th Lecture](VIDEO_RECORDED_NOT_POSTED) w/Speaker: topic
# Sprint / Q&A
***
# fin
