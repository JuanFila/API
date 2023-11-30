const {Router} = require('express')
const UsersController = require("../controllers/UsersController")

const usersRoute = Router()

function myMiddleware(request, response, next) {
  console.log("Passou pelo middleware!");
  if(!request.body.iSAdmin){
    return response.json({message: "user unauthorized"})
  }
  next()
}

const userControler = new UsersController();

usersRoute.post("/", myMiddleware, userControler.create)

module.exports = usersRoute