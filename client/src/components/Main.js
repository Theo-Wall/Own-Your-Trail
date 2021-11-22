import './Main.css'
import ListTrails from './ListTrails'

const Main = () => {
    return (
        <div className='mainArea'>
            <div className="refinedSearch">sidebar</div>
            <div className="main">
                <ListTrails />
            </div>
        </div>
    )
}

export default Main