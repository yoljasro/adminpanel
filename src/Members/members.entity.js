const mongoose = require('mongoose');

const MembersSchema = new mongoose.Schema({
  image: {
    type: String,
  },
 title:{
  type: String,
 },

});

const Members = mongoose.model('Members', MembersSchema);

module.exports = { MembersSchema, Members };