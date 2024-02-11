const { Router } = require('express');
const portalRoute = Router();
const Club = require('../models/club');
const clubfa = require('../models/clubfa');
const secretary = require('../models/secretary');
const societyfa = require('../models/societyfa');
const chairsap = require('../models/chairsap');
const deanstudents = require('../models/deanstudents');

portalRoute.get('/', async (req, res) => {
  if (req.isAuthenticated()) {
    club = await Club.findOne({ email: req.user.email });
    Clubfa = await clubfa.findOne({ email: req.user.email });
    Secretary = await secretary.findOne({ email: req.user.email });
    Societyfa = await societyfa.findOne({ email: req.user.email });
    Chairsap = await chairsap.findOne({ email: req.user.email });
    Deanstudents = await deanstudents.findOne({ email: req.user.email });
    if (club) {
      res.redirect('/club/dashboard');
    } else if (Clubfa) {
      res.redirect('/Clubfa/dashboard');
    } else if (Secretary) {
      res.redirect('/Secretary/dashboard');
    } else if (Societyfa) {
      res.redirect('/Societyfa/dashboard');
    } else if (Chairsap) {
      res.redirect('/Chairsap/dashboard');
    } else if (Deanstudents) {
      res.redirect('/Deanstudents/dashboard');
    } else {
      res.redirect('/logout');
    }
    //res.render('main', { user: req.user });
  } else {
    res.render('main', { user: null });
  }
});

portalRoute.get('/login/:user', (req, res) => {
  user = req.params.user;
  res.render('login', { user: user });
});

portalRoute.get('/logout', function (req, res) {
  req.logout((err) => {
    if (err) {
      console.log(err);
    }
  });
  res.redirect('/');
});

module.exports = portalRoute;
