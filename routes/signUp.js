const Router = require(`express`).Router()
const UserController = require(`../controllers/user`)

Router.post('/', UserController.signUp)

module.exports = Router