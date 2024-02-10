const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  email: { type: String },
  userType: { type: String },
});

const account = mongoose.model('account', accountSchema);
module.exports = account;
