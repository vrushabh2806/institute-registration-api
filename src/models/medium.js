const mongoose = require('mongoose');

const mediumSchema = new mongoose.Schema({
  language: { type: String, required: true } // e.g., English, Hindi
});

module.exports = mongoose.model('Medium', mediumSchema);
