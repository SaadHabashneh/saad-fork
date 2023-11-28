const express = require("express")
const users = require("../controllers/users")
const usersRouter = express.Router()
usersRouter.post("/register",users.register)
usersRouter.get("/",users.getAllUsers)
module.exports = usersRouter