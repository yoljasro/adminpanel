// src/admin/command.resource.js
const AdminBro = require('admin-bro'); // (yoki @adminjs, loyihangizga mos)
const { Command } = require('../Restaurants/restraurants.entity');

// Agar upload hooklaringiz bo‘lsa, ulang; bo‘lmasa bu qismini olib tashlang
let uploadBeforeHook, uploadAfterHook;
try {
  const hooks = require('./actions/upload-image.hook');
  uploadBeforeHook = hooks.before;
  uploadAfterHook  = hooks.after;
} catch (_) {
  // optional
}

/** @type {import('admin-bro').ResourceOptions} */
const options = {
  properties: {
    image: {
      // custom componentlaringiz bo‘lsa:
      // components: {
      //   edit: AdminBro.bundle('./components/upload-image.edit.tsx'),
      //   list: AdminBro.bundle('./components/upload-image.list.tsx'),
      // },
    },
    _id:       { isVisible: { list: false, filter: false, show: true,  edit: false } },
    __v:       { isVisible: false },
    createdAt: { isVisible: { list: true,  filter: true,  show: true,  edit: false } },
    updatedAt: { isVisible: { list: false, filter: false, show: true,  edit: false } },
  },

  listProperties:   ['title', 'job', 'image', 'createdAt'],
  filterProperties: ['title', 'job', 'createdAt'],
  editProperties:   ['title', 'job', 'image', 'obrazovanie', 'stajRaboti'],
  showProperties:   ['title', 'job', 'image', 'obrazovanie', 'stajRaboti', 'createdAt', 'updatedAt'],

  actions: {
    new:  uploadBeforeHook && uploadAfterHook ? { before: uploadBeforeHook, after: uploadAfterHook } : undefined,
    edit: uploadBeforeHook && uploadAfterHook ? { before: uploadBeforeHook, after: uploadAfterHook } : undefined,
    show: { isVisible: true },
  },

  navigation: { icon: 'User' },
  sort: { direction: 'desc', sortBy: 'createdAt' },
};

module.exports = {
  options,
  resource: Command,
};
