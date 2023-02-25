import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'



// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'


export default function App() {

  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path='https://daily-workout.onrender.com/'
              element={user ? <Home /> : <Navigate to="https://daily-workout.onrender.com/login"/>}
            />
            
            <Route
              path='https://daily-workout.onrender.com/login'
              element={!user ?  <Login /> : <Navigate to="https://daily-workout.onrender.com/" />}
            />

            <Route
              path='https://daily-workout.onrender.com/signup'
              element={!user ? <Signup /> : <Navigate to="https://daily-workout.onrender.com/" />}
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
