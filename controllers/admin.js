const { Router } = require('express');
const adminRoute = Router();
const account = require('../models/account');

adminRoute.get('/admin', (req, res) => {
  res.render('admin');
});

adminRoute.post('/admin', (req, res) => {
  console.log(req.body);
  const newUser = new account({
    email: req.body.email,
    userType: req.body.type,
  });
  newUser.save();
  res.redirect('/admin');
});

module.exports = adminRoute;
