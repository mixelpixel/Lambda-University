const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const model = mongoose.model;

// {username: foo, password: bar}
const UserSchema = new Schema({
// const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// module.exports = model('User', UserSchema);
module.exports = mongoose.model('User', UserSchema);
