// src/controllers/command.controller.js
const { Command } = require('../Restaurants/restraurants.entity');

// Create Command
const createCommand = async (req, res) => {
  try {
    // Orqaga moslik uchun alias:
    const title = req.body.title ?? req.body.name;
    const job   = req.body.job   ?? req.body.jobTitle;
    const image = req.body.image;

    const obrazovanie = req.body.obrazovanie ?? req.body.education ?? '';
    const stajRaboti  = req.body.stajRaboti  ?? req.body.experience ?? '';

    if (!title || !job) {
      return res.status(400).json({ message: 'title va job majburiy' });
    }

    const doc = new Command({ title, job, image, obrazovanie, stajRaboti });
    await doc.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Command
const getAllCommand = async (req, res) => {
  try {
    const commands = await Command.find().sort({ createdAt: -1 });
    res.status(200).json(commands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createCommand, getAllCommand };
