const AdminBro = require('admin-bro');
const { Services } = require('./news.entity');

const {
  after: passwordAfterHook,
  before: passwordBeforeHook,
} = require('./actions/password.hook');

const {
  after: uploadAfterHook,
  before: uploadBeforeHook,
} = require('./actions/upload-image.hook');

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
        edit: AdminBro.bundle('./components/upload-image.edit.tsx'),
        list: AdminBro.bundle('./components/upload-image.list.tsx'),
      },
    },
  },
  actions: {
    new: {
      after: async (response, request, context) => {
        const modifiedResponse = await passwordAfterHook(response, request, context);
        return uploadAfterHook(modifiedResponse, request, context);
      },
      before: async (request, context) => {
        const modifiedRequest = await passwordBeforeHook(request, context);
        return uploadBeforeHook(modifiedRequest, context);
      },
    },
    edit: {
      after: async (response, request, context) => {
        const modifiedResponse = await passwordAfterHook(response, request, context);
        return uploadAfterHook(modifiedResponse, request, context);
      },
      before: async (request, context) => {
        const modifiedRequest = await passwordBeforeHook(request, context);
        return uploadBeforeHook(modifiedRequest, context);
      },
    },
    show: {
      isVisible: false,
    },
  },
  // Ikonka qo'shildi
};

module.exports = {
  options,
  resource: Services,
};
