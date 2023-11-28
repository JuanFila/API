const { Router } = require('express');

const routes = Router();

const usersRoute = require("./users.routes")

routes.use("/users", usersRoute)

module.exports = routes;