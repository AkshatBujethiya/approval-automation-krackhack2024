const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  email: { type: String },
});
