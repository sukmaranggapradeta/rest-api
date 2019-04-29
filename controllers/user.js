const { User } = require(`../models/`)
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const ENV = require('dotenv')
ENV.config()

class UserController{
    static signUp(req, res){
        const { full_name, email, password } = req.body
        User.create({
            full_name: full_name,
            email: email,
            password: password
        })
        .then((newUser)=>{
            res.status(201).json(newUser)
        })
        .catch((err)=>{
            res.status(500).json({ msg: `err :${err.message}` })
        })
    }

    static signIn(req, res){
        const { email, password } = req.body
        User.findOne({
            where: { email }
        })
        .then((user)=>{
            if(user){
                bcrypt.compare(`${password}/\/`, user.password) 
                    .then((respon)=>{
                        if(respon){
                            const payload ={
                                id: user.id,
                                email:user.email
                            }
                            const token = jwt.sign({ payload }, process.env.JWT_SECRET_KEY);
                            res.status(200).json(token)                    
                        }else{
                            res.status(401).json(`username/password invalid`)
                        }
                    })
            }else{
                res.status(401).json(`username/password invalid`)
            }
        })
        .catch((err)=>{
            res.status(500).json({ msg: `err :${err.message}` })
        })
    }
}

module.exports = UserController