const User = require('../models/User');

exports.getUserList = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.error(err);
      res.redirect('/users');
    } else {
      res.render('user/index', { users });
    }
  });
};

exports.getAddUser = (req, res) => {
  res.render('user/add');
};

exports.postAddUser = (req, res) => {
 
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.render('user/add', { error: 'All fields are required' });
  }

  // Create a new user
  const newUser = new User({ username, email, password });
  newUser.save((err) => {
    if (err) {
      console.error(err);
      return res.render('user/add', { error: 'Error adding user' });
    }
    res.redirect('/users');
  });
};

exports.getEditUser = (req, res) => {
  const userId = req.params.id;
  User.findById(userId, (err, user) => {
    if (err || !user) {
      console.error(err);
      return res.redirect('/users');
    }
    res.render('user/edit', { user });
  });
};

exports.postEditUser = (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;

  User.findByIdAndUpdate(userId, { username, email }, (err, user) => {
    if (err || !user) {
      console.error(err);
      return res.redirect('/users');
    }
    res.redirect('/users');
  });
};

exports.deleteUser = (req, res) => {
  const userId = req.params.id;
  User.findByIdAndDelete(userId, (err, user) => {
    if (err || !user) {
      console.error(err);
      return res.redirect('/users');
    }
    res.redirect('/users');
  });
};

