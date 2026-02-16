// controllers/news.controller.js
const { Services } = require('../Services/news.entity');

// Create
const createService = async (req, res) => {
  try {
    const {
      image, date,
      title_uz, title_ru, title_en, title_uz_cyr,
      description_uz, description_ru, description_en, description_uz_cyr
    } = req.body;
    const doc = new Services({
      image, date,
      title_uz, title_ru, title_en, title_uz_cyr,
      description_uz, description_ru, description_en, description_uz_cyr
    });
    await doc.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read all
const getAllServices = async (req, res) => {
  try {
    const list = await Services.find();
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read by id
const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Services.findById(id);
    if (!item) return res.status(404).json({ message: 'Service not found' });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// (Ixtiyoriy) Orqaga moslik uchun eski nomlar (alias)
const createNews = createService;
const getAllNews = getAllServices;
const getNewsById = getServiceById;

module.exports = {
  // Yangi nomlar:
  createService,
  getAllServices,
  getServiceById,
  // Eski nomlar (agar boshqa joyda chaqirilayotgan bo'lsa sinmasin):
  createNews,
  getAllNews,
  getNewsById,
};
