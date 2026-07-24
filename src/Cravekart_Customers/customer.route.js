const express = require("express")
const CustomerController = require("./customer.controller")
const router = express.Router();

router.get('/customer/list', CustomerController.index)
router.post('/customer/store', CustomerController.store)
router.get('/customer/show/:id', CustomerController.show)
router.put('/customer/update', CustomerController.updated)
router.delete('/customer/delete/:id', CustomerController.deleted)

module.exports = router