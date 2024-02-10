const { Router } = require('express');
const addFormRoute = Router();

addFormRoute.get('/addRequest', (req, res) => {
  user = req.params.user;
  res.render('addForm', { user: user });
});

module.exports = portalRoute;
