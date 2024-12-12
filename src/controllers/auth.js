const usersModel = require("../models/user_models")
const jwt = require("jsonwebtoken")
async function login(req,res) {
    try {
        const {id} = req.body

        const result = await usersModel.userDetailByID(id)
        if (result.length <= 0) {
            res.json({
                message: "Login Failed",
            })
            return
        }
        const token = jwt.sign(
            {id: result[0].id,name: result[0].name},
            "secret",
            {expiresIn: "2 days"}
        )
        res.json({
            message: "Login success",
            id: result[0].id,
            token: token,
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    login
}