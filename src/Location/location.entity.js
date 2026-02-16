const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    address_uz: { type: String, required: true },
    address_ru: { type: String, required: true },
    address_en: { type: String, required: true },
    address_uz_cyr: { type: String, required: true },
    phone1: { type: String, required: true },
    phone2: { type: String },
    email: { type: String },
    map_link: { type: String }, // Link for the map iframe or external map
    working_hours_uz: { type: String },
    working_hours_ru: { type: String },
    working_hours_en: { type: String },
    working_hours_uz_cyr: { type: String },
}, { timestamps: true });

const Location = mongoose.model('Location', LocationSchema);

module.exports = { LocationSchema, Location };
