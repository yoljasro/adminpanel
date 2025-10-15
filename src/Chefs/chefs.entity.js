const mongoose = require('mongoose');

const ChefsSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  certificate:{
    type: String,
  },
  nameuz: {
    type: String,
  },
  siteLink: {
    type: String,
  },
  instagram:{
    type: String,
  },
  facebook:{
    type: String,
  },
  telegram: {
    type: String
  }
});

const Chefs = mongoose.model('Chefs', ChefsSchema);

module.exports = { ChefsSchema, Chefs };