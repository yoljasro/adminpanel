const AdminBro = require('admin-bro');
const { Motto } = require('./motto.entity');

/** @type {AdminBro.ResourceOptions} */
const options = {
  properties: {
    title_uz: { type: 'string' },
    title_ru: { type: 'string' },
    title_en: { type: 'string' },
    title_uz_cyr: { type: 'string' },
    subtitle_uz: { type: 'string' },
    subtitle_ru: { type: 'string' },
    subtitle_en: { type: 'string' },
    subtitle_uz_cyr: { type: 'string' },
    description_uz: { type: 'textarea' },
    description_ru: { type: 'textarea' },
    description_en: { type: 'textarea' },
    description_uz_cyr: { type: 'textarea' },
  },
};

module.exports = {
  options,
  resource: Motto,
};
