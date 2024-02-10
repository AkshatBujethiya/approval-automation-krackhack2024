const { Router } = require('express');
const homeRoute = Router();

homeRoute.get('/', (req, res) => {
  if (req.isAuthenticated) {
    res.render('main', { user: req.user });
  }
  res.render('main', { user: null });
});

module.exports = homeRoute;
