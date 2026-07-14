const CategoriesModel = require("../models/Categories.model");

async function CreateCategory(req, res) {

    try {
        console.log(req.body);

        const { CategoryName, CategoryImage, Stock } = req.body;


        const Save = await CategoriesModel.create({

            CategoryName,
            CategoryImage,
            Stock
        });

        return res.json({
            message: " Category Added Successfully! ",
            data: Save
        })


    } catch (error) {

        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    CreateCategory
}
