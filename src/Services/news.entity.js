// Services/news.entity.js
const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema(
  {
    image: { type: String, trim: true },
    title_uz: { type: String, required: true, trim: true },
    title_ru: { type: String, required: true, trim: true },
    title_en: { type: String, required: true, trim: true },
    title_uz_cyr: { type: String, required: true, trim: true },
    description_uz: { type: String, trim: true },
    description_ru: { type: String, trim: true },
    description_en: { type: String, trim: true },
    description_uz_cyr: { type: String, trim: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Hot-reload'da xato bo'lmasligi uchun:
const Services = mongoose.models.Services || mongoose.model('Services', ServiceSchema);

module.exports = { Services, ServiceSchema };
