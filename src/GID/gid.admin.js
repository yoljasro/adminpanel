const AdminBro = require('admin-bro');
const { Gid } = require('./gid.entity');

/** @type {AdminBro.ResourceOptions} */
const options = {
    properties: {
        lat: { type: 'number' },
        lng: { type: 'number' },
        category: { type: 'string', availableValues: [
          { value: 'Restaurant', label: 'Restaurant' },
          { value: 'Manufacturer', label: 'Manufacturer' },
          { value: 'Hotel', label: 'Hotel' },
        ]},
    }
};

module.exports = {
  options,
  resource: Gid, 
};