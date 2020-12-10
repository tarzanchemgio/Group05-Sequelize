const controller = {};

const models = require("../models");

controller.getAll = () => {
  return models.Recipe.findAll(), models.Ingredients.findAll();
};

module.exports = controller;
