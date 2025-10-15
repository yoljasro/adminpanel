const mongoose = require('mongoose');

const GidSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
        enum: ['Restaurant', 'Manufacturer', 'Hotel'],
        required: true,
      },

});

const Gid = mongoose.model('Gid', GidSchema);

module.exports = { GidSchema, Gid };