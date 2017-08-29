const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const model = mongoose.model;               // <~~~ WHY DOESN'T THIS WORK?????

// // per: http://mongoosejs.com/docs/populate.html
// // Should this be in a separate commentsModel.js file?
const CommentSchema = new Schema({
  text: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
});
// module.exports = mongoose.model('Comment', CommentSchema);

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  content: {
    type: String,
    required: true,
  },
  comments: [CommentSchema],
});

module.exports = mongoose.model('Post', PostSchema);
// module.exports = model('Post', PostSchema); // <~~~ WHY DOESN'T THIS WORK?????
