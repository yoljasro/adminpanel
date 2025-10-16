const { Members } = require('../Members/members.entity');

// Create Motto
const createMembers = async (req, res) => {
  try {
    const { image , title   } = req.body;
    const newMembers = new Members({  image , title  });
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