const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true
  },
  brandName:{
    type: String,
    required: true
  },
  serviceType:{
    type: String,
    required: true
  },
  phone:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  }
});

const Form = mongoose.model('Form', FormSchema);

module.exports = { FormSchema, Form };
