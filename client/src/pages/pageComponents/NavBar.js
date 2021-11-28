import './NavBar.css'
import { Link } from "react-router-dom"
 
const NavBar = () => {
    return (
        <div className='navigation-bar'>
            <div >Navigation Bar of Optimum</div>
            <span>
                {/* <Link></Link> are used to point to the Routes which point to page components  */}
            <Link to="/createTrailPage" >Create Trail Page</Link>
            </span>
            <span>
            <Link to="/">Go Home</Link> 
            </span>
        </div>
    )
}

export default NavBar