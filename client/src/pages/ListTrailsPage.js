import './ListTrailsPage.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ListTrails from '../components/ListTrails'
import AuthVerify from '../components/Login/AuthVerify'

import LoginScreen from "../components/Login/LoginScreen"

const ListTrailsPage = ({ displayTrails, loginScreenState, setLoginScreenState, registrationScreenState, setRegistrationScreenState, token, setToken, isLoggedIn, setIsLoggedIn, userInfo, setUserInfo }) => {

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
        <div className="main">
            {trailData && <ListTrails trailList={trailData} />}
        </div>

        <LoginScreen
          loginScreenState={loginScreenState}
          setLoginScreenState={setLoginScreenState}
          registrationScreenState={registrationScreenState}
          setRegistrationScreenState={setRegistrationScreenState}
          setToken={setToken}
          setIsLoggedIn={setIsLoggedIn}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
        <AuthVerify 
          token={token}
          setToken={setToken}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setUserInfo={setUserInfo}
        />
      </div>
    );
}

export default ListTrailsPage