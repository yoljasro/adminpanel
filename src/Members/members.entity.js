const mongoose = require('mongoose');

const MembersSchema = new mongoose.Schema({
  image: { type: String }, // Carousel image
  bgImage: { type: String }, // Modal background
  lastyebat: { type: String }, // Mobile modal image
  name_uz: { type: String },
  name_ru: { type: String },
  name_en: { type: String },
  name_uz_cyr: { type: String },
  spec_uz: { type: String },
  spec_ru: { type: String },
  spec_en: { type: String },
  spec_uz_cyr: { type: String },
  biography_uz: { type: String },
  biography_ru: { type: String },
  biography_en: { type: String },
  biography_uz_cyr: { type: String },
  education_uz: { type: String },
  education_ru: { type: String },
  education_en: { type: String },
  education_uz_cyr: { type: String },
  experience_uz: { type: String },
  experience_ru: { type: String },
  experience_en: { type: String },
  experience_uz_cyr: { type: String },
});

const Members = mongoose.model('Members', MembersSchema);

module.exports = { MembersSchema, Members };