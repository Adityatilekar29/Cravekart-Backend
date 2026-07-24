const express = require("express");
const CategoryController = require("./Categories.controller")
const router = express.Router();

router.get("/category/list", CategoryController.index)
router.post("/category/store", CategoryController.store)
router.get("/category/show/:id", CategoryController.show)
router.put("/category/update", CategoryController.updated)
router.delete("/category/delete/:id", CategoryController.deleted)


module.exports = router 