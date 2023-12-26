const {Router} = require('express')
const UsersController = require("../controllers/UsersController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersRoute = Router()

const userControler = new UsersController();

usersRoute.post("/", userControler.create)

usersRoute.put("/", ensureAuthenticated, userControler.update)

module.exports = usersRoute