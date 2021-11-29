import './MainPage.css'
import ListTrails from '../components/ListTrails'

const MainPage = ({setTrailId}) => {
    return (
        <div className='main-area'>
            <div className="refined-search">sidebar</div>
            <div className="main">
                <ListTrails setTrailId={setTrailId} />
            </div>
        </div>
    )
}

export default MainPage