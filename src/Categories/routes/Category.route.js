const CategoryController = require("../controllers/Categories.controller");

const express = require("express");

const router = express.Router();
    
router.post("/add/category", CategoryController.CreateCategory)

module.exports = router