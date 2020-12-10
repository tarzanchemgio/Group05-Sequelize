const controller = {};

const models = require("../models");

controller.getAll = () => {
  return models.Recipe.findAll();
};

module.exports = controller;
