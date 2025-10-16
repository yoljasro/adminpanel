// src/Command/command.entity.js
const mongoose = require('mongoose');

const CommandSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, minlength: 2, maxlength: 300 }, // F.I.Sh.
    job:   { type: String, required: true, trim: true, minlength: 2, maxlength: 300 }, // lavozim/kasb
    image: { type: String, trim: true },                                               // rasm URL yoki path
    obrazovanie: { type: String, trim: true },                                         // Образование
    stajRaboti:  { type: String, trim: true },                                         // Стаж работы
  },
  {
    timestamps: true,
    collection: 'commands', // kolleksiya nomi qat’iy 'commands'
  }
);

// 🔒 OverwriteModelError'ni oldini olish (hot-reload safe)
const Command = mongoose.models.Command
  ? mongoose.model('Command')
  : mongoose.model('Command', CommandSchema);

module.exports = { CommandSchema, Command };
