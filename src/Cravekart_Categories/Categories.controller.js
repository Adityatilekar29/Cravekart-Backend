// const CategoryModel = require("./")

const index = (req, res) => {

    return res.json('i am Index function')
}
const store = (req, res) => {

    try {

        const {
            name,
            image_url,
            description,
            isActive,
            icon,
            slug,
            parent_id,
            is_featured,
            is_active,
            sort_order

        } = req.body

        return res.json({
            message: "Data Created successfully!",
            Data: {
                name,
                image_url,
                description,
                isActive,
                icon,
                slug,
                parent_id,
                is_featured,
                is_active,
                sort_order
            }
        })

    } catch (error) {
        console.log(error);

        return res.json({
            message: "Internal Server Error!"
        })

    }
}
const show = (req, res) => {
    try {
        const { id } = req.params;

        return res.json({
            message: "Reqest Accepted Successfully!",
            id
        })

    } catch (error) {
        console.log(error);
        return res.json({
            message: "Internal Server Error!!"
        })

    }
}
const updated = (req, res) => {
    try {

        const {
            name,
            image_url,
            description,
            isActive,
            icon,
            slug,
            parent_id,
            is_featured,
            is_active,
            sort_order

        } = req.body

        return res.json({
            message: "Data Updated successfully!",
            Data: {
                name,
                image_url,
                description,
                isActive,
                icon,
                slug,
                parent_id,
                is_featured,
                is_active,
                sort_order
            }
        })

    } catch (error) {
        console.log(error);

        return res.json({
            message: "Internal Server Error!"
        })

    }
}
const deleted = (req, res) => {
    try {
        const { id } = req.params;

        return res.json({
            message: "Reqest Deleted Successfully!",
            id
        })

    } catch (error) {
        console.log(error);
        return res.json({
            message: "Internal Server Error!!"
        })

    }
}

module.exports = {
    index,
    store,
    show,
    updated,
    deleted
}