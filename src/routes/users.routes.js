const {Router} = require('express')
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController")
const UserAvatarController = require("../controllers/UserAvatarController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersRoute = Router()
const upload = multer(uploadConfig.MULTER)

const userControler = new UsersController();
const userAvatarController = new UserAvatarController();

usersRoute.post("/", userControler.create)
usersRoute.put("/", ensureAuthenticated, userControler.update)
usersRoute.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoute