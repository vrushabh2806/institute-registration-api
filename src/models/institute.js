const mongoose = require('mongoose');

const instituteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: String,
  address: String
});

module.exports = mongoose.model('Institute', instituteSchema);
