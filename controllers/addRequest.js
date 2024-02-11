const { Router } = require('express');
const Request = require('../models/request');
const addFormRoute = Router();
var upload = require('../config/storage');

addFormRoute.get('/addRequest', (req, res) => {
  user = req.params.user;
  res.render('requestform');
});

addFormRoute.post(
  '/addRequest',
  upload.array('attachments', 10),
  (req, res) => {
    data = req.body;
    console.log(data);
    if (!req.body.money) {
      newRequest = new Request({
        time: Date.now(),
        title: data.title,
        description: data.request_description,
        email: req.user.email,
        money_req: null,
        secretary_status: false,
        club_fa_status: false,
        society_fa_status: false,
        chairsap_status: false,
      });
      newRequest.save();
    } else {
      newRequest = new Request({
        time: Date.now(),
        title: data.title,
        description: data.request_description,
        email: req.user.email,
        money_req: data.money,
        secretary_status: false,
        club_fa_status: false,
        society_fa_status: false,
        chairsap_status: false,
      });
      newRequest.save();
    }
    res.redirect('/');
  }
);
module.exports = addFormRoute;
