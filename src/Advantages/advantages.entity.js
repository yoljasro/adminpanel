const mongoose = require('mongoose');

const AdvantagesSchema = new mongoose.Schema({
    title_uz: { type: String, required: true },
    title_ru: { type: String, required: true },
    title_en: { type: String, required: true },
    title_uz_cyr: { type: String, required: true },
    description_uz: { type: String, required: true },
    description_ru: { type: String, required: true },
    description_en: { type: String, required: true },
    description_uz_cyr: { type: String, required: true },
    image: {
        type: String,
        default: ''
    },
    phoneImage: {
        type: String,
        default: ''
    }
}, { timestamps: true });

const Advantages = mongoose.model('Advantages', AdvantagesSchema);

module.exports = { AdvantagesSchema, Advantages };
