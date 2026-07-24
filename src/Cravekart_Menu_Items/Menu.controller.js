const MenuModel = require("./Menu.model")

const index = async (req, res) => {

    const list = await MenuModel.find()

    return res.json(list);
}
const store = async (req, res) => {

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


        const save = await MenuModel.create({
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
        })

        if (!save) {
            return res.json({
                message: "sometthing went wrong!"
            })
        }

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

const show = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await MenuModel.findById(id)

        return res.json({
            message: "Reqest Accepted Successfully!",
            data
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

const deleted = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await MenuModel.deleteOne({ _id: id })

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