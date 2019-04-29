const Router = require(`express`).Router()
const UserController = require(`../controllers/user`)

Router.post('/', UserController.signIn)

module.exports = Router