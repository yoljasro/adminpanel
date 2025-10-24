// src/command/command.controller.js
const { Command } = require('../Restaurants/restraurants.entity');

// POST /api/commands
const createCommand = async (req, res) => {
  try {
    const title = req.body.title ?? req.body.name;
    const job   = req.body.job   ?? req.body.jobTitle;
    const image = req.body.image ?? '';

    const obrazovanie = req.body.obrazovanie ?? req.body.education ?? '';
    const stajRaboti  = req.body.stajRaboti  ?? req.body.experience ?? '';

    if (!title || !job) {
      return res.status(400).json({ message: 'title va job majburiy' });
    }

    const doc = await Command.create({ title, job, image, obrazovanie, stajRaboti });
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/commands
const getAllCommand = async (_req, res) => {
  try {
    const commands = await Command.find().sort({ createdAt: -1 });
    res.status(200).json(commands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createCommand, getAllCommand };
