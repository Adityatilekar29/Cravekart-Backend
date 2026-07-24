const CategoryModel = require("./Categories.model")

const index = async (req, res) => {

    const list = await CategoryModel.find()

    return res.json(list)
}
const store = (req, res) => {

    try {

        const {
            name,
            image_url,
            description,
            icon,
            slug,
            parent_id,
            is_featured,
            is_active,
            sort_order

        } = req.body


        const save = CategoryModel.create({
            name,
            image_url,
            description,
            icon,
            slug,
            parent_id,
            is_featured,
            is_active,
            sort_order
        })

        if (!save) {
            return res.json({
                message: "Something Went Wrong!"
            })
        }


        return res.json({
            message: "Data Created successfully!",
            Data: {
                name,
                image_url,
                description,
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
const show = async (req, res) => {
    try {
        const { id } = req.params;

        const list = await CategoryModel.findById(id)

        return res.json({
            message: "Reqest Accepted Successfully!",
            list
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
const deleted = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await CategoryModel.deleteOne({ _id: id })

        return res.json({
            message: "Reqest Deleted Successfully!",
            data
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