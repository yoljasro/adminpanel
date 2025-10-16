// src/admin/command.resource.js
const AdminBro = require('admin-bro');
const { Command } = require('./restraurants.entity');

// Faqat rasm upload hooklari kerak bo'lsa — password hook'larni olib tashlaymiz
const {
  after: uploadAfterHook,
  before: uploadBeforeHook,
} = require('./actions/upload-image.hook');

/** @type {AdminBro.ResourceOptions} */
const options = {
  properties: {
    image: {
      components: {
        edit: AdminBro.bundle('./components/upload-image.edit.tsx'),
        list: AdminBro.bundle('./components/upload-image.list.tsx'),
      },
    },
    _id:        { isVisible: { list: false, filter: false, show: true,  edit: false } },
    __v:        { isVisible: false },
    createdAt:  { isVisible: { list: true,  filter: true,  show: true,  edit: false } },
    updatedAt:  { isVisible: { list: false, filter: false, show: true,  edit: false } },
  },

  listProperties:   ['title', 'job', 'image', 'createdAt'],
  filterProperties: ['title', 'job', 'createdAt'],
  editProperties:   ['title', 'job', 'image', 'obrazovanie', 'stajRaboti'],
  showProperties:   ['title', 'job', 'image', 'obrazovanie', 'stajRaboti', 'createdAt', 'updatedAt'],

  actions: {
    new:  { before: uploadBeforeHook, after: uploadAfterHook },
    edit: { before: uploadBeforeHook, after: uploadAfterHook },
    show: { isVisible: true },
  },

  navigation: { icon: 'Manufacture' },
  sort: { direction: 'desc', sortBy: 'createdAt' },
};

module.exports = {
  options,
  resource: Command, // MUHIM: aynan Command modeli
};
