const express = require('express');
const { 
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')//createWorkout getWorkouts getWorkout deleteWorkout updateWorkout will take the same controller

const requireAuth = require('../middleware/requireAuth')//to check user authentification


const router = express.Router();//will use express Router for user post,retrieve,delete,update data with requireAuth

// require auth for all workout routes
router.use(requireAuth)

// get all workouts
router.get('/', getWorkouts)

// get single workout
router.get('/:id', getWorkout)

// post a new workout
router.post('/', createWorkout)

// delete a new workout
router.delete('/:id', deleteWorkout)


// update a new workout
router.patch('/:id', updateWorkout)

module.exports = router
