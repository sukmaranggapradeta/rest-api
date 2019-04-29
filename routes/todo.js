const Router = require(`express`).Router()
const TodoController = require('../controllers/todo')
const authenticated = require('../middlewares/Authenticate')
const authorized = require('../middlewares/Authorize') 

Router.get('/', TodoController.getAll)
Router.get(`/:id`, authenticated, authorized, TodoController.getOne)
Router.post(`/`, authenticated, TodoController.create)
Router.delete(`/:id`, authenticated, authorized, TodoController.delete)
Router.put(`/:id`, authenticated, authorized, TodoController.put)
Router.patch(`/:id`, authenticated, authorized, TodoController.pacth)


module.exports = Router