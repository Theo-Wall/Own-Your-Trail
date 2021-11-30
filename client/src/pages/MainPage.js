import './MainPage.css'
import ListTrails from '../components/ListTrails'
import ShowTrailDetailPage from './ShowTrailDetailPage'


const MainPage = ({trailId, setTrailId}) => {
    
    return (
        <div className='main-area'>
            <div className="refined-search">sidebar</div>
            { trailId && 
                <div>
                    <ShowTrailDetailPage trailId={trailId} /> 
                </div>
            }
            { !trailId &&
                <div className="main">
                    <ListTrails setTrailId={setTrailId} />
                </div>
            }
        </div>
    )
}

export default MainPage