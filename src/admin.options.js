const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

// models
const AdminCompany = require('./companies/company.admin');
// const CompanyLogo = require("./ProjectsLogo/projectLogo.admin")
// const Form = require("./Form/form.admin")
const Motto = require('./Motto/motto.admin');
const Advantages = require('./Advantages/advantages.admin');
const Services = require('./Services/news.admin');
const Restaurant = require('./Restaurants/restaurants.admin');
const Members = require('./Members/members.admin');
const Location = require('./Location/location.admin');
const Reviews = require('./Reviews/reviews.admin');

/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [Services, Restaurant, Members, Motto, Advantages, Location, Reviews],
};
module.exports = options;
