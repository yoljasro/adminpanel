const { Members } = require('../Members/members.entity');

// Create Motto
const createMembers = async (req, res) => {
  try {
    const {
      image, bgImage, lastyebat,
      name_uz, name_ru, name_en, name_uz_cyr,
      spec_uz, spec_ru, spec_en, spec_uz_cyr,
      biography_uz, biography_ru, biography_en, biography_uz_cyr,
      education_uz, education_ru, education_en, education_uz_cyr,
      experience_uz, experience_ru, experience_en, experience_uz_cyr
    } = req.body;
    const newMembers = new Members({
      image, bgImage, lastyebat,
      name_uz, name_ru, name_en, name_uz_cyr,
      spec_uz, spec_ru, spec_en, spec_uz_cyr,
      biography_uz, biography_ru, biography_en, biography_uz_cyr,
      education_uz, education_ru, education_en, education_uz_cyr,
      experience_uz, experience_ru, experience_en, experience_uz_cyr
    });
    await newMembers.save();
    res.status(201).json(newMembers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Barcha kompaniyalarni olish
const getAllMembers = async (req, res) => {
  try {
    const members = await Members.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createMembers, getAllMembers };