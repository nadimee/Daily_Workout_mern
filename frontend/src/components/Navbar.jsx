import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


const Navbar = () => {

  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1><span style={{textShadow:'1px 1px 3px black'}}>D</span><span style={{fontWeight:'bold'}}>AIL</span><span style={{textShadow:'1px 1px 3px black'}}>Y</span> <span style={{fontWeight:'bold'}}>WORK</span><span style={{textShadow:'1px 1px 3px black'}}>OUT</span></h1>
        </Link>
        <nav>
          {user && (
          <div>
            <span>{user.email}</span>
            <button onClick={handleClick}>Log out</button>
          </div>)}
          {!user && (
            <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar