const MenuModel = require("./Menu.model")

const index = (req, res) => {
    return res.json("I am Index Function");
}
const store = (req, res) => {

    try {

        const {
            categoryId,
            category,
            foodName,
            price,
            stock,
            image,
            rating,
            description,
            slug,
            short_description,
            compare_price,
            cost,
            sku,
            is_vegetarian,
            is_spicy,
            is_seasonal,
            preparation_time,
            calories,
            ingredients,
            allergens,
            is_active,
            is_featured,
            main_image,
            gallery_images,
            meta_title,
            meta_description,

        } = req.body

        return res.json({
            message: "Data Created successfully!",
            Data: {
               categoryId,
            category,
            foodName,
            price,
            stock,
            image,
            rating,
            description,
            slug,
            short_description,
            compare_price,
            cost,
            sku,
            is_vegetarian,
            is_spicy,
            is_seasonal,
            preparation_time,
            calories,
            ingredients,
            allergens,
            is_active,
            is_featured,
            main_image,
            gallery_images,
            meta_title,
            meta_description,
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
            categoryId,
            category,
            foodName,
            price,
            stock,
            image,
            rating,
            description,
            slug,
            short_description,
            compare_price,
            cost,
            sku,
            is_vegetarian,
            is_spicy,
            is_seasonal,
            preparation_time,
            calories,
            ingredients,
            allergens,
            is_active,
            is_featured,
            main_image,
            gallery_images,
            meta_title,
            meta_description,
        } = req.body

        return res.json({
            message: "Data Updated successfully!",
            Data: {
               categoryId,
            category,
            foodName,
            price,
            stock,
            image,
            rating,
            description,
            slug,
            short_description,
            compare_price,
            cost,
            sku,
            is_vegetarian,
            is_spicy,
            is_seasonal,
            preparation_time,
            calories,
            ingredients,
            allergens,
            is_active,
            is_featured,
            main_image,
            gallery_images,
            meta_title,
            meta_description,
            }
        })

    } catch (error) {
        console.log(error);
        return res.json({
            message: "Internal Server Error!!"
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