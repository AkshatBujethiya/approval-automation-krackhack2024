const { Router } = require('express');
const portalRoute = Router();

portalRoute.get('/login/:user', (req, res) => {
  user = req.params.user;
  res.send(`This is ${user} page`);
});

module.exports = portalRoute;
