const { News } = require('../Services/news.entity');

// Create Motto
const createNews = async (req, res) => {
  try {
    const { image , title  , description , date } = req.body;
    const newNews = new News({  image , title  , description , date });
    await newNews.save();
    res.status(201).json(newNews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Barcha kompaniyalarni olish
const getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNewsById = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findById(id);
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createNews, getAllNews , getNewsById };
