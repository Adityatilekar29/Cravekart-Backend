const CategoryController = require("../controllers/Categories.controller");

const express = require("express");

const Router = express.Router();

Router.post("add/category", CategoryController.CreateCategory)

module.exports = Router