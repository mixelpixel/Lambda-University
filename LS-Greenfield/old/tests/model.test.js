// const mongoose = require('mongoose');
// const Food = require('../models/food');
// const server = require('../src/server');
// const chai = require('chai');
// const sinon = require('sinon'); // <~~~~~~~~~~~~~~~ STUBBING
//
// // mongoose.connect('mongodb://localhost/test'); // ~~~> , { useMongoClient: true }, (err) => {...}
// /* eslint no-console: 0 */
// mongoose.connect('mongodb://localhost/test', { useMongoClient: true }, (err) => {
//   if (err) return console.log(err);
//   console.log('DUDE! You are like totally connected to the TEST DataBase from the MODELS tests, man!');
// });
// // added to use npm run watch, not sure if this is the best practice?
// // Wish I had better documentatin than this: https://groups.google.com/forum/?fromgroups=#!topic/mongoose-orm/PXTjqqpaDFk
// mongoose.models = {};
// mongoose.modelSchemas = {};
// // Promises & mongoose: http://mongoosejs.com/docs/promises.html
// mongoose.Promise = global.Promise;
//
// const expect = chai.expect;
//
// describe('Food', () => {
//   beforeEach(() => {
//     // http://sinonjs.org/releases/v3.2.1/stubs/
//     sinon.stub(Food, 'find');
//   });
//   afterEach(() => {
//     Food.find.restore();
//   });
//
//   // getName is ONLY on the instance "food" (from class "Food")
//   describe('#getName()', () => {
//     const food = new Food({ // <~~~~~~~ Is this okay or is it better to make declarations within the it('should... ?
//       name: 'Ban Chan'
//     });
//     it('should be a function', () => {
//       // const food = new Food({
//       //   name: 'Ban Chan'
//       // });
//       expect(food.getName).to.be.a('function');
//     });
//     it('should return a String', () => {
//       // const food = new Food({
//       //   name: 'Ban Chan'
//       // });
//       expect(typeof food.getName()).to.equal('string');
//     });
//     it('should return the name of the food', () => {
//       const goodFood = new Food({
//         name: 'Anything from Ruth\'s Chris Steak House'
//       });
//       expect(goodFood.getName()).to.equal('Anything from Ruth\'s Chris Steak House');
//     });
//   });
//
//   // getAllFoods is a method on the Class Food (not the instance of "food")
//   describe('#getAllFoods()', () => {
//     it('should be a function', () => {
//       expect(Food.getAllFoods).to.be.a('function'); // <~~ undefined??? WHY, WHY - WHY?????????????
//     });
//     it('should return all the foods', () => {
//       // sinon.stub(Food, 'find');
//       Food.find.yields(null, [{ name: 'chicken pot pie', reaction: 'yum' }]);
//       Food.getAllFoods((foods) => { // <~~~~~~~~~~~~ NOT A FUNCTION??? WHY, WHY - WHY?????????????
//         expect(foods).to.be.an('array');
//         expect(foods.length).to.equal(1);
//         expect(foods[0].name).to.equal('chicken pot pie');
//         expect(foods[0].reaction).to.equal('yum');
//         // Food.find.restore();
//       });
//     });
//   });
// });
