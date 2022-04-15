const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Email or password not valid'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('User already exist'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await  User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = jwt.sign(
            {id: user.id, email, role},
            process.env.SECRET_KEY,
            {expiresIn: '24h'}
        )
        return res.json({token})
    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest('ID not found'))
        }
        res.json(id);
    }
}

module.exports = new UserController()