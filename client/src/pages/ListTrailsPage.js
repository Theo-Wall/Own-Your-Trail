import './ListTrailsPage.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ListTrails from '../components/ListTrails'
import BackgroundCard from '../components/ui/BackgroundCard'

import LoginScreen from "../components/Login/LoginScreen"

const ListTrailsPage = ({ displayTrails, loginScreenState, setLoginScreenState, registrationScreenState, setRegistrationScreenState, setToken, setIsLoggedIn }) => {

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
          <BackgroundCard>
            {trailData && <ListTrails trailList={trailData} />}
          </BackgroundCard>
        </div>

        <LoginScreen
          loginScreenState={loginScreenState}
          setLoginScreenState={setLoginScreenState}
          registrationScreenState={registrationScreenState}
          setRegistrationScreenState={setRegistrationScreenState}
          setToken={setToken}
          setIsLoggedIn={setIsLoggedIn}
        />

      </div>
    );
}

export default ListTrailsPage