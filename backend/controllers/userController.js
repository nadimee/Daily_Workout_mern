const User = require('../models/userModel')
const jwt = require('jsonwebtoken')//To authenticate a user by adding a token to HTTP  header

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}

// login user
const loginUser = async (req, res) => {
  const { email , password} = req.body //{email,password} = {email,password} from request body

       
  try {
    const user = await User.login(email, password) // user get the User model login function and pass email,password arguments

    // create token
    const token = createToken(user._id) //token for user before respond

    res.status(200).json({email, token})// respond with email and token To authenticate user

  } catch (err) {
    res.status(400).json({error: err.message})
  }

}

// signup user
const singupUser = async (req, res) => {

  const {email, password} = req.body

  try {
    const user = await User.signup(email, password) // user get the User model signup function and pass email,password arguments

    // create token
    const token = createToken(user._id)//token for new user before respond

    res.status(200).json({email, token}) // respond with email and token To authenticate user

  } catch (err) {
    res.status(400).json({error: err.message})
  }

}


module.exports = {
  singupUser,
  loginUser
}