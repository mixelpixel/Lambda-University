const User = require('../models/userModels');

const STATUS_USER_ERROR = 422;

const login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ $and: [{ username }, { password }] })
    .exec()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(STATUS_USER_ERROR);
      res.json({ error: err })
    });
}

const createUser = (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    // newUser.save((err, user) => {
    //   if(err) {
    //     res.status(STATUS_USER_ERROR);
    //     res.json(err);
    //     return;
    //   }
    //   res.json(user);
    // })
    newUser.save()
      .then((newUser) => {
          res.json(newUser);
      })
      .catch((err) => {
          res.status(STATUS_USER_ERROR);
          res.json({ stack: err.stack, message: err.message });
      });
}


module.exports = {
    createUser,
    login,
};
