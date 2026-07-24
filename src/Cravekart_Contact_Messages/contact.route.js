const express = require("express")
const ConatctController = require("./contact.controller")
const router = express.Router();

router.get('/contact/list', ConatctController.index)
router.post('/contact/store', ConatctController.store)
router.get('/contact/show/:id', ConatctController.show)
router.put('/contact/update', ConatctController.updated)
router.delete('/contact/delete/:id', ConatctController.deleted)

module.exports = router