const mongoose = require('mongoose');

const CommandsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },   // F.I.Sh.
    job:   { type: String, required: true, trim: true },   // lavozim/kasb
    image: { type: String, trim: true },   // rasm URL yoki fayl yo'li
    obrazovanie: { type: String }, // Образование
    stajRaboti:  { type: String} // Стаж работы
  },
  {
    timestamps: true,
    collection: 'commands'   // kolleksiya nomini qat’iy "commands" qilib belgilash
  }
);

// Model nomi ham "commands"
const Commands = mongoose.model('commands', CommandsSchema);   
module.exports = { CommandsSchema, Commands };