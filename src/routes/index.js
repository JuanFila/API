const { Router } = require('express');

const usersRoute = require("./users.routes")
const notesRoute = require("./notes.routes")

const routes = Router();

routes.use("/users", usersRoute)
routes.use("/notes", notesRoute)

module.exports = routes;