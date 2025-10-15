const AdminBro = require('admin-bro');
const { Form } = require('./form.entity');

/** @type {AdminBro.ResourceOptions} */
const options = {
  properties: {
    name: { type: 'string' },
    surname: { type: 'string'},
    brandName: { type: 'string'},
    serviceType: { type: 'string'},
    phone: { type: 'string'},
    email: { type: 'string'},
  },
};

module.exports = {
  options,
  resource: Form, 
};