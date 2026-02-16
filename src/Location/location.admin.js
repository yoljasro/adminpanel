const AdminBro = require('admin-bro');
const { Location } = require('./location.entity');

/** @type {AdminBro.ResourceOptions} */
const options = {
    properties: {
        address_uz: { type: 'string' },
        address_ru: { type: 'string' },
        address_en: { type: 'string' },
        address_uz_cyr: { type: 'string' },
        phone1: { type: 'string' },
        phone2: { type: 'string' },
        email: { type: 'string' },
        map_link: { type: 'textarea' },
        working_hours_uz: { type: 'textarea' },
        working_hours_ru: { type: 'textarea' },
        working_hours_en: { type: 'textarea' },
        working_hours_uz_cyr: { type: 'textarea' },
    },
};

module.exports = {
    options,
    resource: Location,
};
