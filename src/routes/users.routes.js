const {Router} = require('express')
const usersRoute = Router()

const UsersController = require("../controllers/UsersController")

const userControler = new UsersController();

usersRoute.post("/", userControler.create)

module.exports = usersRoute