const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  contents: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = {
  Post,
};
