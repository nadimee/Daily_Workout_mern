require('dotenv').config()//we gonna need .env configuration

const morgan = require('morgan') //log requests made to our Nodejs server
const express = require('express')//to respond to requests with route support so we can write responses to specific URLs
const mongoose = require('mongoose')/*map the model attributes and requirements to the database and create new collections 
                                      and documents in our database, and make queries to retrieve info from the database*/
const workoutRoutes = require('./routes/workoutsRoutes')//route that app will use
const userRoutes = require('./routes/userRoutes')//route that app will use
const indexHtml = require('../frontend/build/index.html')

// express app
const app = express();//app will get the request from a specefic url and response to specific url

// middlewares
app.use(express.json())//our app will use json format in communication
app.use(morgan('dev'))//app use morgan in logging requests

// routes
app.use('/api/workouts',workoutRoutes)//express app use workoutRoutes and give it the path /api/workouts
app.use('/api/user',userRoutes)//express app use userRoutes and give it the path /api/user
app.use('/',indexHtml)

// Handle GET requests for the root path
app.get('/', (req, res) => {
  res.sendFile(indexHtml);
});


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch(err => console.log(err))

