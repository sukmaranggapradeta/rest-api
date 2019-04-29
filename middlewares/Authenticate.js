const jwt = require('jsonwebtoken')
module.exports = function(req, res, next){
    if (req.headers.hasOwnProperty('token')){
        try{
            const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY)
            req.decoded = decoded
            next()
        }catch(e){
            res.status(400).json({ msg: `invalid token` })
        }
    }
}