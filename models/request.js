const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  time: { type: Date },
  title: { type: String },
  description: { type: String },
  email: { type: String },
  money_req: { type: String },
  secretary_status: { type: Boolean },
  club_fa_status: { type: Boolean },
  society_fa_status: { type: Boolean },
  chairsap_status: { type: Boolean },
});

const request = mongoose.model('request', requestSchema);
module.exports = request;
