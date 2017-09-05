# Lambda University - September 05, 2017: Day 045, Tuesday
## Coding Challenge #41
- "Reverse Linked List" available in https://repl.it/student/submissions/1489170
***
Ben Nelson
Karthik Viswanathan
Thomson Comer
Ryan Hamblin
Ivan Mora
Sean Chen
Tai Chulikavit
Emily Sperry
Christine Gierer
GUEST LECTURER
NO_VIDEO_RECORDED
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
- make an app.js file and `npm init`
- using mocha and jai (or jest)
- mongoose express body-parser mocha chai sinon chai-http
- make a server.js file
- get db running...
- app.js
```js

8080
```

- server.js
```js
const express = require('express');
const bodyParser = require('body-parser';)
const Food = require('./food');

const server = express();
server.use(bodyParser.json());

// routes (to be tested)
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
const { Schema, model } = mongoose;

const FoodSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true
  }
});

FoodSchema.methods.getName = function() {
  return this.name;
}

FoodSchema.statics.getAllFoods = function(cb) {
  Food.find((), (err, food) => {
    if (err) return cb(err);
    cb(food);
  });
}

const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;
```

- routes.test.js
```js
const mongoose = require('mongoos');
mongoose.connect('mongodb://localhost/test')

const Food = require('./food');
const server = require('/server');

const chai, { expect } = require('chai');
const chaiHTTP = require('chai-http')

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
    it('should get all of the food', (done) => {
      const food = {
        name: 'Hot Dog'
      }
      chai.request(server)
      .post('/food')
      .send(food)
      .end((err, res) => {
        if (err) return console.log(err);
        expect(res.status).to.equal(200);
        expect(res.body.name).to.equal.('Hot Dog');
        done();
      });
    });
  });

});

```

- mocha tests:
```json
"scripts": {
  "test": "mocha *.test.js"
}
```

- models.test.js
```js
const mongoose = require('mongoos');
mongoose.connect('mongodb://localhost/test')
const Food = require('./food');

const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');

describe('Food', () => {
  beforeEach(() => {
    sinon.stub(Food, 'find')
  });

  afterEach(() => {
    Food.find.restore();
  });

  describe('#getName()', () => { // describe a model on the method
    it('should return the name of the food', () => {
      const food = new Food ({
        name: 'Rib Steak'
      });
      expect(food.getName()).to.equal('Rib Steak');
    it('should return a string', () => {
      const food = new Food ({
        name: 'Rib Steak'
      });
      expect(typeof food.getName()).to.equal('string');
    });
  });
  describe('#getAllFoods', () => {
      it('should return all the foods', () => {
        Food.find.yields(null, [{ name: 'pumpkin pie' }]);
      });

      Food.getAllFoods((foods) => {
        expect(foods.length).to.equal(1);
        expect(foods[0].name).to.equal('pumpkin pie');
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
