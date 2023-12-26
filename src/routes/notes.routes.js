const {Router} = require('express')

const NotesController = require("../controllers/NotesController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const notesRoute = Router()

const notesControler = new NotesController();

notesRoute.use(ensureAuthenticated)

notesRoute.post("/", notesControler.create);
notesRoute.get("/",  notesControler.index);
notesRoute.get("/:id", notesControler.show);
notesRoute.delete("/:id", notesControler.delete);

module.exports = notesRoute;