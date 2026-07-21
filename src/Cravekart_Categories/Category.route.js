const CategoryController = require("./Categories.controller");
const express = require("express");

const router = express.Router();

router.post("/add/category", CategoryController.CreateCategory)
router.get("/get/category", CategoryController.FetchCategory)
router.put("/update/category/:id", CategoryController.UpdateCategory)
router.delete("/delete/category/:id", CategoryController.DeleteCategory)

module.exports = router