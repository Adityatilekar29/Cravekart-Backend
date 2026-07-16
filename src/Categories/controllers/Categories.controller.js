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

async function FetchCategory(req, res) {

    try {

        const get = await CategoriesModel.find();

        return res.json({
            message: "Categories Fetched",
            data: get
        })

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: error.message
        });

    }

}


async function UpdateCategory(req, res) {

    const Update = await CategoriesModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json({
        message: "Updated Successfully!"
    })
}

async function DeleteCategory(req, res) {

    const Delete = await CategoriesModel.findByIdAndDelete(req.params.id)

    res.json({
        message: "Deleted Successfully!"
    })

}

module.exports = {
    CreateCategory,
    FetchCategory,
    UpdateCategory,
    DeleteCategory
}
