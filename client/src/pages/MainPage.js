import './MainPage.css'
import ListTrails from '../components/ListTrails'

const MainPage = () => {
    return (
        <div className='main-area'>
            <div className="refined-search">sidebar</div>
            <div className="main">
                <ListTrails />
            </div>
        </div>
    )
}

export default MainPage