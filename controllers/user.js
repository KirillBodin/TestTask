const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')
const validator = require("email-validator");
const keys = require('../config/keys')


module.exports.auth = async function (req, res) {
    if (!validator.validate(req.body.email)) {
        res.status(400).json({
            massage: "Wrong format email"
        })
    }
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
    const candidate = await User.findOne({email: req.body.email})
    if (candidate) {
        // if User exist, throw err
        res.status(409).json({
            massage: "User already exist. Try another email"
        })
    } else {
        try {
            const {first_name, last_name, age, email} = req.body
            const user = await new User({
                first_name,
                last_name,
                age,
                email
            })
            if (age > keys.age) {
                await user.save()
                res.status(200).json({
                    message: 'Done'
                })
            } else {
                res.status(406).json({
                    message: "You are still too young"
                })
            }
        } catch (e) {
            errorHandler(res, e)
        }
    }

}


module.exports.getByEmail = async function (req, res) {
    try {
        if (Object.keys(req.body).length === 0) {
            res.status(400).send({message: "Content cannot be empty"});
            return;
        }
        const user = await User.findOne({email: req.body.email})
        res.status(200).json(user)
    } catch (e) {
        errorHandler(res, e)
    }
}