import './NavBar.css'
import { Link } from "react-router-dom"
 
const NavBar = () => {

    return (
      <div className="navigation-bar">
        <span className="app-name">
          <h1>Own Your Trail</h1>
        </span>
        <span className="links">
        <span className="nav-link">
          <Link className="text-link" to="/">
            Go Home
          </Link>
        </span>
        <span className="nav-link">
          {/* <Link></Link> are used to point to the Routes which point to page components  */}
          <Link className="text-link" to="/createTrailPage">
            Create Your Trail
          </Link>
        </span>
        <span className="nav-link">
          <Link className="text-link" to="">
            Login
          </Link>
        </span>
      </span>
      </div>
    );
}

export default NavBar