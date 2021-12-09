import './NavBar.css'
import { Link } from "react-router-dom"
 
const NavBar = ({setLoginScreenState}) => {

    return (
      <div className="navigation-bar">
        <div className="app-name">
          <h1>Own Your Trail</h1>
        </div>
        <span>
          <Link className="text-link" to="/">
            Go Home
          </Link>
        </span>
        <span>
          {/* <Link></Link> are used to point to the Routes which point to page components  */}
          <Link className="text-link" to="/createTrailPage">
            Create Your Trail
          </Link>
        </span>
        <span>
          <button onClick={() => setLoginScreenState(true)}>
            Login
          </button>
        </span>
      </div>
    );
}

export default NavBar