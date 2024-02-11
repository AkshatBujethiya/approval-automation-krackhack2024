const { Router } = require('express');
const dashboardController = Router();
const request = require('../models/request');

dashboardController.get('/:usertype/dashboard', async (req, res) => {
  if (req.isAuthenticated()) {
    req_results = await request.find({ email: req.user.email });
    res.render('dashboard', { requests: req_results });
  } else {
    res.redirect('/');
  }
});

dashboardController.post('/request', (req, res) => {
  body = req.body;
});

module.exports = dashboardController;
