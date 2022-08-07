const errorHandler = require('../utils/errorHandler')
const keys = require('../config/keys')


module.exports.postNameEmail = function (req, res) {
    if (!req.body.first_name.match(/^[A-Za-z\s]+$/) || !req.body.last_name.match(/^[A-Za-z\s]+$/)) {
        res.status(400).json({
            massage: "Wrong format name"
        })
    }
    if (!req.body.age.match(/^[1-9]?[0-9]{1}$|^100$/)) {
        res.status(400).json({
            massage: "Wrong format age"
        })
    }
    try {
        const {first_name, last_name, age} = req.body
        const user = {
            first_name,
            last_name,
            age
        }
        if (age > keys.age) {
            res.status(200).json({
                message: `Hello ${first_name} ${last_name}`
            })
        } else {
            console.log(user)
            res.status(406).json({
                message: "You are still too young"
            })
        }
    } catch (e) {
        errorHandler(res, e)
    }
}

