const { Restaurants } = require('../Restaurants/restraurants.entity');

// Create Restaurant
const createRestaurant = async (req, res) => {
    try {
        const { image , certificate , nameuz , siteLink , instagram , facebook , telegram } = req.body;
        const newRestaurant = new Restaurants({ image , certificate , nameuz , siteLink , instagram , facebook , telegram });
        await newRestaurant.save();
        res.status(201).json(newRestaurant);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all Restaurants
const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurants.find();
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createRestaurant, getAllRestaurants };
