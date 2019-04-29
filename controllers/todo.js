const { Todo } = require(`../models/`)

class TodoController{
    static getAll(req, res){
        Todo.findAll({})
        .then((dataTodos)=>{
            res.status(200).json(dataTodos)
        })
        .catch((err)=>{
            res.status(500).json({ msg: `err :${err.message}` })
        })
    }

    static getOne(req, res){
        Todo.findByPk(req.params.id)
        .then((dataTodo)=>{
            res.status(200).json(dataTodo)
        })
        .catch((err)=>{
            res.status(500).json({ msg: `err :${err.message}` })
        })
    }

    static create(req, res){
        const { title, description, UserId } = req.body
        Todo.create({
            title: title,
            description: description,
            UserId: req.decoded.payload.id
        })
        .then((newTodo)=>{
            res.status(201).json(newTodo)
        })
        .catch((err)=>{
            res.status(500).json({ msg: `err :${err.message}` })
        })
    }

    static delete(req, res){
        Todo.destroy({
            where:{
                id:req.params.id
            }
        })
        .then((dataDeleted)=>{
            res.status(200).json(`${dataDeleted} Deleted success`)
        })
        .catch((err)=>{
            res.status(500).json({ msg: `err :${err.message}` })
        })
    }

    static put(req, res){
        const { title, description, UserId } = req.body
        Todo.update(
        {
            title: title,
            description: description,
            UserId: UserId
        }, 
        {
            where:
            {
                id:req.params.id
            }
        })
    }

    static pacth(req, res){
        const { field, value } = req.body
        Todo.update(
        {
            [field]: value
        }, 
        {
            where:
            {
                id:req.params.id
            }
        })
    } 
}

module.exports = TodoController