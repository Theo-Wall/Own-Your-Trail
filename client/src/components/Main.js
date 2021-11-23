import './Main.css'
import ListTrails from './ListTrails'

const Main = () => {
    return (
        <div className='main-area'>
            <div className="refined-search">sidebar</div>
            <div className="main">
                <ListTrails />
            </div>
        </div>
    )
}

export default Main