const express = require("express");
const MenuController = require("./Menu.controller")

const router = express.Router();

router.get("/menu/index", MenuController.index)
router.post("/menu/store", MenuController.store)
router.get("/menu/show/:id", MenuController.show)
router.put("/menu/update", MenuController.updated)
router.delete("/menu/delete/:id", MenuController.deleted)


module.exports = router