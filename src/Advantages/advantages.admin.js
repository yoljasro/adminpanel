const AdminBro = require('admin-bro');
const { Advantages } = require('./advantages.entity');

/** @type {AdminBro.ResourceOptions} */
const options = {
    properties: {
        title_uz: { type: 'string' },
        title_ru: { type: 'string' },
        title_en: { type: 'string' },
        title_uz_cyr: { type: 'string' },
        description_uz: { type: 'textarea' },
        description_ru: { type: 'textarea' },
        description_en: { type: 'textarea' },
        description_uz_cyr: { type: 'textarea' },
        image: {
            components: {
                edit: AdminBro.bundle('../Services/components/upload-image.edit.tsx'),
                list: AdminBro.bundle('../Services/components/upload-image.list.tsx'),
            },
        },
        phoneImage: {
            components: {
                edit: AdminBro.bundle('../Services/components/upload-image.edit.tsx'),
                list: AdminBro.bundle('../Services/components/upload-image.list.tsx'),
            },
        },
    },
};

module.exports = {
    options,
    resource: Advantages,
};
