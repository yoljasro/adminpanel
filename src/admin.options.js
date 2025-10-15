const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

// models
const AdminCompany = require('./companies/company.admin');
// const CompanyLogo = require("./ProjectsLogo/projectLogo.admin")
// const Form = require("./Form/form.admin")
const Services = require("./Services/news.admin")
const Restaurant = require("./Restaurants/restaurants.admin")
// const Chefs = require("./Chefs/chefs.admin")
const Members = require("./Members/members.admin")
// const Gid = require("./GID/gid.admin")
/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [  Services  , Restaurant  , Members ],
};
module.exports = options;
