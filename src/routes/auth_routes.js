const express = require("express");
const routes = express.Router()
const { login } = require('../controllers/auth')
const usersController = require('../models/user_models')
const authenthicateToken = require('../middleware/auth')

routes.post('/login, login')
routes.get('/:id, authenthicateToken, userController.userDetailByID')

module.exports = routes