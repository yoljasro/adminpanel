const { Reviews } = require('../Reviews/reviews.entity');

const createReview = async (req, res) => {
    try {
        const { name, date, text_uz, text_ru, text_en, text_uz_cyr } = req.body;
        const newReview = new Reviews({ name, date, text_uz, text_ru, text_en, text_uz_cyr });
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Reviews.find().sort({ createdAt: -1 });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createReview, getAllReviews };
