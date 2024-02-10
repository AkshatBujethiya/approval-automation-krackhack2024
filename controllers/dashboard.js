const { Router } = require('express');
const dashboardController = Router();
const account = require('../models/account');

dashboardController.get(':usertype/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    user = req.user;
    account.findOne(
      { email: user.email, userType: req.params.usertype },
      (err, found) => {
        if (err) {
          res.send('You are not Authorised');
        } else {
          res.send('Sucess');
        }
      }
    );
  } else {
    res.redirect('/');
  }
});
