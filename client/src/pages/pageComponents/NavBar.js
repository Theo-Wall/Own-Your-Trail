import './NavBar.css'

const NavBar = ({toCreateTrail}) => {
    return (
        <div className='navigation-bar'>
            <div>Navigation Bar of Optimum</div>
            <button onClick={toCreateTrail}>Create Trail</button>
        </div>
    )
}

export default NavBar