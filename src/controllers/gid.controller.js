const { Gid } = require('../GID/gid.entity');

// Create Form
const createGid = async (req, res) => {
    try {
        const { name , lat  , lng, category} = req.body;
        const newGid = new Gid({ name , lat  , lng, category });
        await newGid.save();
        res.status(201).json(newGid);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all Form
const getAllGid = async (req, res) => {
    try {
        const gids = await Gid.find();
        res.status(200).json(gids);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createGid , getAllGid };
