const AdminBro = require('admin-bro');
const { Members } = require('./members.entity');

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
    name_uz: { type: 'string' },
    name_ru: { type: 'string' },
    name_en: { type: 'string' },
    name_uz_cyr: { type: 'string' },
    spec_uz: { type: 'string' },
    spec_ru: { type: 'string' },
    spec_en: { type: 'string' },
    spec_uz_cyr: { type: 'string' },
    biography_uz: { type: 'textarea' },
    biography_ru: { type: 'textarea' },
    biography_en: { type: 'textarea' },
    biography_uz_cyr: { type: 'textarea' },
    education_uz: { type: 'textarea' },
    education_ru: { type: 'textarea' },
    education_en: { type: 'textarea' },
    education_uz_cyr: { type: 'textarea' },
    experience_uz: { type: 'textarea' },
    experience_ru: { type: 'textarea' },
    experience_en: { type: 'textarea' },
    experience_uz_cyr: { type: 'textarea' },
    image: {
      components: {
        edit: AdminBro.bundle('./components/upload-image.edit.tsx'),
        list: AdminBro.bundle('./components/upload-image.list.tsx'),
      },
    },
    bgImage: {
      components: {
        edit: AdminBro.bundle('./components/upload-image.edit.tsx'),
        list: AdminBro.bundle('./components/upload-image.list.tsx'),
      },
    },
    lastyebat: {
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
  resource: Members,
};