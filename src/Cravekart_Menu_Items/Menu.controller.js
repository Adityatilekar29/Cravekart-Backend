const MenuModel = require("./Menu.model")

const index = (req, res) => {
    return res.json("I am Index Function");
}
const store = (req, res) => {
    return res.json("I am Store Function");
}
const show = (req, res) => {
    return res.json("I am Show Function");
}
const updated = (req, res) => {
    return res.json("I am updated Function");
}
const deleted = (req, res) => {
    return res.json("I am deleted Function");
}


module.exports = {
    index,
    store,
    show,
    updated,
    deleted
}