// src/command/command.entity.js
const mongoose = require('mongoose');

const CommandSchema = new mongoose.Schema(
  {
    // F.I.Sh.
    title: { type: String, required: true, trim: true, minlength: 2, maxlength: 300 },
    // lavozim/kasb
    job:   { type: String, required: true, trim: true, minlength: 2, maxlength: 300 },
    // rasm URL yoki path
    image: { type: String, trim: true, default: '' },

    // ixtiyoriy qo‘shimcha maydonlar
    obrazovanie: { type: String, trim: true, default: '' }, // Образование
    stajRaboti:  { type: String, trim: true, default: '' }, // Стаж работы
  },
  {
    timestamps: true,
    collection: 'commands',
  }
);

// OverwriteModelError'ning oldini olish
const Command = mongoose.models.Command || mongoose.model('Command', CommandSchema);

module.exports = { CommandSchema, Command };
