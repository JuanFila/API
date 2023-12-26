const {Router} = require('express')

const TagsController = require("../controllers/TagsController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")


const tagsRoute = Router()

const tagsController = new TagsController();

tagsRoute.get("/", ensureAuthenticated, tagsController.index);

module.exports = tagsRoute;