const FoodModel = require("./Menu.model")

const FoodPost = async (req, res) => {
    try {
        console.log(req.body);

        const { foodName, price, category, stock, image, description, rating } = req.body;

        const save = await FoodModel.create({
            foodName,
            price,  
            category,
            stock,
            rating,
            description,
            image
        });

        return res.status(201).json({
            message: "Food Added Successfully",
            data: save
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: error.message
        });
    }
}

const FoodGet = async (req, res) => {

    try {

        const Foods = await FoodModel.find();

        return res.status(200).json({
            message: "Food List ",
            Data: Foods
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }

}

const FoodUpdate = async (req, res) => {

    const UpdateData = await FoodModel.findByIdAndUpdate(

        req.params.id,
        req.body,
        { new: true }
    );
    res.json(UpdateData)
}

const FoodDelete = async (req, res) => {

    const DeleteData = await FoodModel.findByIdAndDelete(req.params.id)

    res.json({
        message: "Food Deleted"
    })
}

module.exports = {
    FoodPost,
    FoodGet,
    FoodUpdate,
    FoodDelete
}