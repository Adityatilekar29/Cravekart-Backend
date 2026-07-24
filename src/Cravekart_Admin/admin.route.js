const express = require("express");
const AdminController = require("./admin.controller")

const router = express.Router();

router.get("/admin/list", AdminController.index)
router.post("/admin/store", AdminController.store)
router.get("/admin/show/:id", AdminController.show)
router.put("/admin/update", AdminController.updated)
router.delete("/admin/delete/:id", AdminController.deleted)


module.exports = router