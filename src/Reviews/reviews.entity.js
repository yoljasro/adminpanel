const mongoose = require('mongoose');

const ReviewsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    text_uz: { type: String, required: true },
    text_ru: { type: String, required: true },
    text_en: { type: String, required: true },
    text_uz_cyr: { type: String, required: true },
}, { timestamps: true });

const Reviews = mongoose.model('Reviews', ReviewsSchema);

module.exports = { ReviewsSchema, Reviews };
