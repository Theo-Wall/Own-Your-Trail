import './MainPage.css'
import ListTrails from '../components/ListTrails'
import SideRefinedSearch from '../components/SideRefinedSearch'



const MainPage = () => {
    
    return (
        <div className='main-area'>
            <div className="refined-search"><SideRefinedSearch /></div>
                <div className="main">
                    <ListTrails />
                </div>
        </div>
    )
}

export default MainPage