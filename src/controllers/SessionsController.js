const knex = require("../database/kenx");
const AppError = require("../utils/AppError");
const { compare } = require("bcryptjs");
const authConfig = require("../configs/auth");
const {sign} = require("jsonwebtoken")

class SessionsController {
    async create(req, res){
        const { email, password} = req.body

        const user = await knex("users").where({email}).first();
        
        if(!user) {
            throw new AppError("E-mail ou senha incorreta", 401)
        }

        const passwordMatched = await compare(password, user.password);

        if(!passwordMatched) {
            throw new AppError("E-mail ou senha incorreta", 401)
        }

        const {secret, expiresIn} = authConfig.jwt;
        const token = sign({} , secret, {
            subject: String(user.id),
            expiresIn
        })
        // mantém o password como undefined para não aparecer no local storage do front
        return res.json({ 
            user: {
                ...user,
                password: undefined,
            },
            token,
        });
    }
}

module.exports = SessionsController