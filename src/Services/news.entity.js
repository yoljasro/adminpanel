// Services/news.entity.js
const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema(
  {
    image: { type: String, trim: true },
    title: { type: String, required: true, trim: true, minlength: 2, maxlength: 300 },
    description: { type: String, trim: true, maxlength: 20000 },
    // Agar kerak bo'lsa qoldiramiz; xohlasangiz olib tashlashingiz mumkin
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Hot-reload'da xato bo'lmasligi uchun:
const Services = mongoose.models.Services || mongoose.model('Services', ServiceSchema);

module.exports = { Services, ServiceSchema };
