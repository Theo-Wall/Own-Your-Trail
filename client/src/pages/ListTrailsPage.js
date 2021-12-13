import './ListTrailsPage.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ListTrails from '../components/ListTrails'

import Modal from '../components/modal/Modal'
import LoginDetails from "../components/LoginDetails"

const ListTrailsPage = ({displayTrails, loginScreenState, setLoginScreenState}) => {

    let params = useParams()
    displayTrails = params.quadrant

    const [trailData, setTrailData] = useState()

    
    useEffect(() => {
        const fetchTrailData = async () => {
          let fetchResult = await fetch('/api/listTrailsByQuadrant/' + displayTrails)
          let fetchedTrails = await fetchResult.json()
          setTrailData(fetchedTrails)  
        }
        fetchTrailData()
      }, [displayTrails])
    
      
      console.log(trailData)
    return (
      <div className="main-area">
        <div classname="main">
            {trailData && <ListTrails trailList={trailData} />}
        </div>

        <Modal
        title="Login Screen"
        show={loginScreenState}
        onClose={()=>setLoginScreenState(false)}
        >
        <LoginDetails setLoginScreenState={setLoginScreenState} />
      </Modal>

      </div>
    );
}

export default ListTrailsPage