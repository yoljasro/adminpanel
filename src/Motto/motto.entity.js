const mongoose = require('mongoose');

const MottoSchema = new mongoose.Schema({
  title_uz: { type: String, required: true },
  title_ru: { type: String, required: true },
  title_en: { type: String },
  title_uz_cyr: { type: String },
  subtitle_uz: { type: String },
  subtitle_ru: { type: String },
  subtitle_en: { type: String },
  subtitle_uz_cyr: { type: String },
  description_uz: { type: String, required: true },
  description_ru: { type: String, required: true },
  description_en: { type: String, required: true },
  description_uz_cyr: { type: String, required: true },
});

const Motto = mongoose.model('Motto', MottoSchema);

module.exports = { MottoSchema, Motto };
