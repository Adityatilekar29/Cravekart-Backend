const express = require("express");
const ChefController = require("./chef.controller")
const router = express.Router();

router.get("/chef/list", ChefController.index)
router.post("/chef/store", ChefController.store)
router.get("/chef/show/:id", ChefController.show)
router.put("/chef/update", ChefController.updated)
router.delete("/chef/delete/:id", ChefController.deleted)

module.exports = router