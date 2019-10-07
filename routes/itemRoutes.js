const express = require('express');
const itemController = require('./../controllers/itemController');

const Router = express.Router();

Router.route('/')
  .get(itemController.getAllItem)
  .post(itemController.createItem);

module.exports = Router;
