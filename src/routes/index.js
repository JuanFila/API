const { Router } = require('express');

const usersRoute = require("./users.routes")
const notesRoute = require("./notes.routes")
const tagsRoute = require("./tags.routes")
const sessionsRoute = require("./sessions.routes")

const routes = Router();

routes.use("/users", usersRoute)
routes.use("/sessions", sessionsRoute);
routes.use("/notes", notesRoute)
routes.use("/tags", tagsRoute)

module.exports = routes;