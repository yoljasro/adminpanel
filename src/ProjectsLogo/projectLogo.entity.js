const mongoose = require('mongoose');

const ProjectLogoSchema = new mongoose.Schema({
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

const ProjectLogo = mongoose.model('ProjectLogo', ProjectLogoSchema);

module.exports = { ProjectLogoSchema, ProjectLogo };