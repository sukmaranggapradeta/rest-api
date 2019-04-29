const { Todo } = require(`../models/`)

module.exports = function(req, res, next){
    Todo.findByPk(req.params.id)
    .then((dataTodo)=>{
        if (req.decoded.payload.id == dataTodo.UserId){
            next()
        }else{
            res.status(400).json({ msg: `you dont have access` })
        }
    })
    .catch(()=>{
        res.status(500).json({ msg: `todo not found`})
    })
}