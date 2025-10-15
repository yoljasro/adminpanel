const mongoose = require('mongoose');

const AdvantageSchema = new mongoose.Schema({
  image: {
    type: String,
  },
 title:{
  type: String,
 },
 description:{
  type: String,
 },

});

const Advantage = mongoose.model('Advantage', AdvantageSchema);

module.exports = { AdvantageSchema, Advantage };