const { Chefs } = require('../Chefs/chefs.entity');

// Create ProjectLogos
const createChefs = async (req, res) => {
    try {
        const { image , certificate , nameuz , siteLink , instagram , facebook , telegram   } = req.body;
        const newChef = new ProjectLogo({  image , certificate , nameuz , siteLink , instagram , facebook , telegram   });
        await newChef.save();
        res.status(201).json(newChef);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all ProjectLogos
const getAllChefs = async (req, res) => {
    try {
        const chefs = await Chefs.find();
        res.status(200).json(chefs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createChefs, getAllChefs };
