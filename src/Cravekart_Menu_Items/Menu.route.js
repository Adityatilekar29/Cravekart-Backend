const express = require("express")
const { FoodPost, FoodGet } = require("./Menu.controller")
const FoodController = require("./Menu.controller")
const router = express.Router()

router.post("/add/food", FoodController.FoodPost)
router.get("/food", FoodController.FoodGet);
router.put("/food/:id", FoodController.FoodUpdate)
router.delete("/food/:id", FoodController.FoodDelete)

module.exports = router 