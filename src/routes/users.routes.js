const {Router} = require('express')
const UsersController = require("../controllers/UsersController")

const usersRoute = Router()

const userControler = new UsersController();

usersRoute.post("/", userControler.create)

module.exports = usersRoute