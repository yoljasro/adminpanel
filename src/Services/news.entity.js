const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
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

const Services = mongoose.model('Services', ServiceSchema);

module.exports = { ServiceSchema, Services };