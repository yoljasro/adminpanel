const { Location } = require('../Location/location.entity');

// Create Location
const createLocation = async (req, res) => {
    try {
        const data = req.body;
        const newLoc = new Location(data);
        await newLoc.save();
        res.status(201).json(newLoc);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all Locations
const getAllLocations = async (req, res) => {
    try {
        const list = await Location.find();
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createLocation, getAllLocations };
