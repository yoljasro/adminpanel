const { Advantages } = require('../Advantages/advantages.entity');

// Create Advantage
const createAdvantage = async (req, res) => {
    try {
        const {
            title_uz, title_ru, title_en, title_uz_cyr,
            description_uz, description_ru, description_en, description_uz_cyr,
            image, phoneImage
        } = req.body;
        const newAdvantage = new Advantages({
            title_uz, title_ru, title_en, title_uz_cyr,
            description_uz, description_ru, description_en, description_uz_cyr,
            image, phoneImage
        });
        await newAdvantage.save();
        res.status(201).json(newAdvantage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all Advantages
const getAllAdvantages = async (req, res) => {
    try {
        const advantages = await Advantages.find().sort({ createdAt: -1 });
        res.status(200).json(advantages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createAdvantage, getAllAdvantages };
