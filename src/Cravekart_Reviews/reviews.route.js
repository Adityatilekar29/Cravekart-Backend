const express = require("express")
const ReviewsController = require("./reviews.controller")
const router = express.Router();

router.get('/reviews/list', ReviewsController.index)
router.post('/reviews/store', ReviewsController.store)
router.get('/reviews/show/:id', ReviewsController.show)
router.put('/reviews/update', ReviewsController.updated)
router.delete('/reviews/delete/:id', ReviewsController.deleted)

module.exports = router