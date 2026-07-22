const AdminModel = require("./admin.model")

const index = (req, res) => {

    return res.json('I am index function')
}
const store = (req, res) => {

    return res.json('I am store function')
}
const show = (req, res) => {

    return res.json('I am show function')
}
const updated = (req, res) => {

    return res.json('I am update function')
}
const deleted = (req, res) => {

    return res.json('I am delete function')
}

module.exports = {
    index,
    store,
    show,
    updated,
    deleted
}