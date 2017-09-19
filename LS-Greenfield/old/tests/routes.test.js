// const mongoose = require('mongoose');
// const Food = require('../models/food');
// const server = require('../src/server');
// const chai = require('chai');
// const chaiHTTP = require('chai-http');
//
// // mongoose.connect('mongodb://localhost/test'); // ~~~> , { useMongoClient: true }, (err) => {...}
// /* eslint no-console: 0 */
// mongoose.connect('mongodb://localhost/test', { useMongoClient: true }, (err) => {
//   if (err) return console.log(err);
//   console.log('DUDE! You are like totally connected to the TEST DataBase from the ROUTES tests, man!');
// });
// // added to use npm run watch, not sure if this is the best practice?
// // Wish I had better documentatin than this: https://groups.google.com/forum/?fromgroups=#!topic/mongoose-orm/PXTjqqpaDFk
// mongoose.models = {};
// mongoose.modelSchemas = {};
// // Promises & mongoose: http://mongoosejs.com/docs/promises.html
// mongoose.Promise = global.Promise;
//
// const expect = chai.expect;
// chai.use(chaiHTTP);
//
// describe('/food', () => {
//   // https://mochajs.org/#describing-hooks
//   // beforeEach "hook" clears out db prior to each test, asynchronously with "done"
//   beforeEach((done) => {
//     // "Food.remove(...)" is asynchronous
//     Food.remove({}, (err) => {
//       if (err) console.log('Something went wrong in ROUTE tests BEFORE!', err);
//       done();
//     });
//   });
//   // afterEach((done) => {
//   //   Food.remove({}, (err) => {
//   //     if (err) console.log('Something went wrong in ROUTE tests AFTER!', err);
//   //     done();
//   //   });
//   // });
//
//   describe('[GET] /food', () => {
//     it('should GET all the Food', (done) => {
//       chai.request(server)
//         .get('/food')
//         .end((err, res) => {
//           if (err) return console.log('Ummm, go GET Hume\'s Guillotine?\n', err.response.error);
//           expect(res.status).to.equal(200);
//           expect(Array.isArray(res.body)).to.equal(true);
//           expect(res.body.length).to.equal(0);
//           done();
//         });
//     });
//   });
//
//   describe('[POST] /food', () => {
//     it('should ADD a new Food and a default reaction', (done) => {
//       const food = {
//         name: 'Pizza'
//       };
//       chai.request(server)
//         .post('/food')
//         .send(food)
//         .end((err, res) => {
//           if (err) return console.log('Like your head POST-Hume\'s Guillotine\n', err.response.error);
//           expect(res.status).to.equal(201); // https://http.cat/201
//           expect(res.body.name).to.equal('Pizza');
//           expect(res.body.reaction).to.equal('yum');
//           done();
//         });
//     });
//   });
//
//   describe('[PUT] /food', () => {
//     it('should MODIFY the reaction to an existing Food item', (done) => {
//       const food = {
//         name: 'Pizza',
//         reaction: 'yuck'
//       };
//       const update = {
//         name: 'Pizza',
//         reaction: 'yum'
//       };
//       chai.request(server)
//         .post('/food')
//         .send(food)
//         .end((err, res) => {
//           if (err) return console.log('PUT route test POST setup: like your head POST-Hume\'s Guillotine\n', err.response.error);
//         });
//       chai.request(server)
//         .put('/food')
//         .send(update)
//         .end((err, res) => {
//           if (err) return console.log('PUT action: like your head POST-Hume\'s Guillotine\n', err.response.error);
//           expect(res.status).to.equal(200); // https://http.cat/200
//           expect(res.body.reaction).to.equal('yum');
//           done();
//         });
//     });
//   });
//
//   describe('[DELETE] /food', () => {
//     it('should DELETE an existing Food item', (done) => {
//       const food = {
//         name: 'Pizza',
//       };
//       const toDelete = {
//         name: 'Pizza'
//       };
//       chai.request(server)
//         .post('/food')
//         .send(food)
//         .end((err, res) => {
//           if (err) return console.log('DELETE route test POST setup: like your head POST-Hume\'s Guillotine\n', err.response.error);
//         });
//       chai.request(server)
//         .delete('/food')
//         .send(toDelete)
//         .end((err, res) => {
//           if (err) return console.log('DELETE action: like your head POST-Hume\'s Guillotine\n', err.response.error);
//           expect(res.status).to.equal(200); // https://http.cat/200
//           // expect(res.body).to.equal({ n: 1, ok: 1 }); // <~~~ O good lard - why doesn't this match????????
//           expect(res.body.n).to.equal(1);
//           expect(res.body.ok).to.equal(1);
//           done();
//         });
//     });
//   });
//
//   describe('[DELETE] /food', () => {
//     it('should not DELETE a non-existing Food item and return 0 for number of items deleted', (done) => {
//       const toDelete = {
//         name: 'Balut'
//       };
//       chai.request(server)
//         .delete('/food')
//         .send(toDelete)
//         .end((err, res) => {
//           if (err) return console.log('non-existent DELETE action: like your head POST-Hume\'s Guillotine\n', err.response.error);
//           expect(res.status).to.equal(200);
//           expect(res.body.n).to.equal(0);
//           expect(res.body.ok).to.equal(1);
//           done();
//         });
//     });
//   });
// });
