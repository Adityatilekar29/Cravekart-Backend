const AdminModel = require("./admin.model")

const index = (req, res) => {

    return res.json('I am index function')
}
const store = (req, res) => {

    try {
        console.log(req.body);

        const { username,
            email,
            password_hash,
            full_name,
            role,
            profile_image,
            last_login,
            is_active,
            two_factor_enabled
        } = req.body;

        return res.json({
            message: "Data Create Successfully!",
            data: {
                username,
                email,
                password_hash,
                full_name,
                role,
                profile_image,
                last_login,
                is_active,
                two_factor_enabled
            }
        });
    } catch (error) {
        console.log(error);
        return res.json({
            message: "Internal Server Error!!"
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

        const { username,
            email,
            password_hash,
            full_name,
            role,
            profile_image,
            last_login,
            is_active,
            two_factor_enabled
        } = req.body;

        return res.json({
            message: "Data Update Successfully!",
            data: {
                username,
                email,
                password_hash,
                full_name,
                role,
                profile_image,
                last_login,
                is_active,
                two_factor_enabled
            }
        });

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
            message: "Data Deleted Successfully!",
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