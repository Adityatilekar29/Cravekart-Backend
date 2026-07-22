const ReviewsModel = require("./reviews.model");

const index = (req, res) => {
    return res.json('i am index function')
}

const store = (req, res) => {
    return res.json('i am store function')
}

const show = (req, res) => {
    return res.json('i am show function')
}

const updated = (req, res) => {
    return res.json('i am update function')
}

const deleted = (req, res) => {
    return res.json('i am delete function')
}

module.exports = {
    index,
    store,
    show,
    updated,
    deleted
}