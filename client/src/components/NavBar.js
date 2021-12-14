import './NavBar.css'
import { Link, useNavigate } from "react-router-dom"

 
const NavBar = ({setLoginScreenState, token, setToken, isLoggedIn, setIsLoggedIn, userInfo, setUserInfo}) => {

  const navigate = useNavigate()

  const navigateHome = () => {
    navigate("/");
  }

  const logoutSetters = () => {
    setIsLoggedIn(false)
    setToken(null)
    setUserInfo({})
  }
  
  const Login = () => {
    return (
      <button onClick={() => setLoginScreenState(true)}>
        Login
      </button>
    )
  }

  const Logout = () => {
    return (
      <span>
        <span>
          Welcome Back {userInfo.userName}
        </span>
        <button onClick={() => logoutSetters()}>
          ( Logout )
        </button>

      </span>
    )
  }

    return (
      <div className="navigation-bar">
        <span className="app-name">
          <h1 onClick={navigateHome}>Own Your Trail</h1>
        </span>
        <span className="links">
          <span className="nav-link">
            <Link className="text-link" to="/">
              Go Home
            </Link>
          </span>
          <span className="nav-link">
            {isLoggedIn &&
              <Link className="text-link" to="/createTrailPage">
                Create Your Trail
              </Link>
            }
          </span>
        
          <span className="nav-link">
            {(isLoggedIn ? Logout() : Login())}
          </span>
        </span>
      </div>
    );
}

export default NavBar