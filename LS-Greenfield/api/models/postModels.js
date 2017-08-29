const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const model = mongoose.model;               // <~~~ WHY DOESN'T THIS WORK?????

// const User = mongoose.model('../models/userModels');

// {
//   title: 'This is a fake blog post title',
//   author: {
//     name: 'Jen Urso'
//     _id: '2lkj3j23,
//   },
//   _id: '234lj23kjh',
//   content: 'This is some classy fake content',
//   comments: [
//     {text:'This is a class comment', author: 'Stanley Yelnats'},
//   ]
// }

// const PostSchema = new mongoose.Schema({
const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  // author: {
  //   name:{
  //       // type: mongoose.Schema.Types.ObjectId,
  //       type: Schema.Types.ObjectId,
  //       ref: 'User',
  //     },
  //   // User._id: Schema.Types.ObjectId,
  //   // _author: User._id,
  // },

  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  // author: {
  //   name: {
  //     type: String,
  //   },
  // },

  // Post._id: Schema.Types.ObjectId,
  // _parent: Post._id,
  // _parent: true, ???
  content: {
    type: String,
    required: true,
  },
  // comments: [
  //   {
  //     text: String,
  //     author: {
  //       type: Schema.Types.ObjectId,
  //       // default: 'Stanley Yelnats',
  //       ref: 'User'
  //     }
  //   },
  // ],
  comments: [CommentSchema],
});

// // per: http://mongoosejs.com/docs/populate.html
// // Should this be in a separate commentsModel.js file?
// // const CommentSchema = new mongoose.Schema({
const CommentSchema = new Schema({
  // _parent: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Post'
  // },
  text: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
});
// module.exports = mongoose.model('Comment', CommentSchema);


module.exports = mongoose.model('Post', PostSchema);
// module.exports = model('Post', PostSchema); // <~~~ WHY DOESN'T THIS WORK?????
