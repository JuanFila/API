const {Router} = require('express')

const NotesController = require("../controllers/NotesController")

const notesRoute = Router()

const notesControler = new NotesController();

notesRoute.get("/", notesControler.index);
notesRoute.get("/:id", notesControler.show);
notesRoute.post("/:user_id", notesControler.create);
notesRoute.delete("/:id", notesControler.delete);

module.exports = notesRoute;