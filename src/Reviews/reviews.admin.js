const AdminBro = require('admin-bro');
const { Reviews } = require('./reviews.entity');

/** @type {import('admin-bro').ResourceOptions} */
const options = {
    properties: {
        _id: { isVisible: { list: false, filter: false, show: true, edit: false } },
        text_uz: { type: 'textarea' },
        text_ru: { type: 'textarea' },
        text_en: { type: 'textarea' },
        text_uz_cyr: { type: 'textarea' },
    },
};

module.exports = {
    resource: Reviews,
    options,
};



