const express = require('express')

// controller functions
const { singupUser, loginUser } = require('../controllers/userController') //singupUser and loginUser will take the same controller

const router = express.Router() //will use express Router for user posting when logging or signup


router.post('/login', loginUser)// login route with path /login and the controller function


router.post('/signup', singupUser)// signup route with path /signup and the controller function


module.exports = router
