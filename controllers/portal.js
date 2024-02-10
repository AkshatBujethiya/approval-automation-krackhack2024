const { Router } = require('express');
const portalRoute = Router();

portalRoute.get('/', (req, res) => {
  res.render('main');
});

portalRoute.get('/login/:user', (req, res) => {
  user = req.params.user;
  res.render('login', { user: user });
});

module.exports = portalRoute;
