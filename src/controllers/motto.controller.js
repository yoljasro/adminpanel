const { Motto } = require('../Motto/motto.entity');

// Create Motto
const createMotto = async (req, res) => {
  try {
    const {
      title_uz, title_ru, title_en, title_uz_cyr,
      subtitle_uz, subtitle_ru, subtitle_en, subtitle_uz_cyr,
      description_uz, description_ru, description_en, description_uz_cyr
    } = req.body;
    const newMotto = new Motto({
      title_uz, title_ru, title_en, title_uz_cyr,
      subtitle_uz, subtitle_ru, subtitle_en, subtitle_uz_cyr,
      description_uz, description_ru, description_en, description_uz_cyr
    });
    await newMotto.save();
    res.status(201).json(newMotto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Barcha kompaniyalarni olish
const getAllMotto = async (req, res) => {
  try {
    const mottos = await Motto.find();
    res.status(200).json(mottos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createMotto, getAllMotto };
