import "./ShowTrailDetailPage.css";
import ShowTrailPhoto from "../components/ShowTrailPhoto";
import LoginScreen from "../components/Login/LoginScreen";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AuthVerify from '../components/Login/AuthVerify'

let ShowTrailDetailPage = ({ loginScreenState, setLoginScreenState, registrationScreenState, setRegistrationScreenState, token, setToken, isLoggedIn, setIsLoggedIn, userInfo, setUserInfo }) => {
  let params = useParams();
  let trailId = params.id;

  const [trailData, setTrailData] = useState([]);

  useEffect(() => {
    const fetchTrailData = async () => {
      let fetchResult = await fetch("/api/getTrailInfo/" + trailId);
      let fetchedTrail = await fetchResult.json();
      setTrailData(fetchedTrail);
    };
    fetchTrailData();
  }, [trailId]);

  return (
    <div className="centered" >
        <h3>{trailData.trailName}</h3>
        <div className="photo">
          {trailData.photos &&
            trailData.photos.map((photo, index) => {
              return (
                <ShowTrailPhoto
                  key={photo._id}
                  photo={photo.url}
                  photoDescription={photo.description}
                  arrayIndex={index}
                />
              );
            })}
        
      </div>
          <div>{trailData.trailDescription}</div>
          <div>{trailData.trailMap}</div>
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
};

export default ShowTrailDetailPage;
