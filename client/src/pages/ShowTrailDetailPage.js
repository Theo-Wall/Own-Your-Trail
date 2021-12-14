import "./ShowTrailDetailPage.css";
import ShowTrailPhoto from "../components/ShowTrailPhoto";
import LoginScreen from "../components/Login/LoginScreen";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating"
import AuthVerify from '../components/Login/AuthVerify'

let ShowTrailDetailPage = ({ loginScreenState, setLoginScreenState, registrationScreenState, setRegistrationScreenState, token, setToken, isLoggedIn, setIsLoggedIn, userInfo, setUserInfo }) => {
  let params = useParams();
  let trailId = params.id;

  const [trailData, setTrailData] = useState([]);
  const [ isUserTrail, setIsUserTrail ] = useState(false);

  
  useEffect(() => {
    const fetchTrailData = async () => {
      let fetchResult = await fetch("/api/getTrailInfo/" + trailId);
      let fetchedTrail = await fetchResult.json();
      setTrailData(fetchedTrail);
    };
    fetchTrailData();

    if (trailData?.userId === userInfo.userId) {
      console.log("its true")
      setIsUserTrail(true)
    }


  }, [trailId, userInfo.userId, trailData.userId]);
  
  

  const handleRating = async (rate) => {
    let newNumberOfRatings = trailData.numberOfTrailRatings + 1
    let newTrailRating = ((trailData.trailRating * trailData.numberOfTrailRatings + ((rate / 20)-1)) / newNumberOfRatings)
    console.log(newTrailRating, (rate/20))

      const response = await fetch('/api/updateTrail/' + trailId, {
        method: "POST",
        body: JSON.stringify({
          "trailRating": newTrailRating.toFixed(1),
          "numberOfTrailRatings": newNumberOfRatings
        }),
        headers: {
          "x-access-token": token,
          "Content-Type": "application/json",
        },
    
        
      })
      let fetchedUpdatedTrail = await response.json()
      setTrailData(fetchedUpdatedTrail)
  }
  return (
    <div className="centered">
      <h3 className="site-title">{trailData.trailName}</h3>
      <span>
        {isLoggedIn && !isUserTrail ? (
          <Rating
            onClick={handleRating}
            size={20}
            ratingValue={trailData.trailRating * 20}
            label
            transition
            readonly={false}
            fillColor="orange"
            emptyColor="gray"
            className="foo"
          />
        ) : (
          <Rating
            size={20}
            ratingValue={trailData.trailRating * 20}
            label
            transition
            readonly={true}
            fillColor="orange"
            emptyColor="gray"
            className="foo"
          />
        )}
        <span>
          {trailData.trailRating} ({trailData.numberOfTrailRatings})
        </span>
          {isUserTrail && isLoggedIn ? (
            <div>This is your trail</div>
          ) : (
            <div>This trail was created by: {trailData.userName}</div>
          )}
      </span>
      <div className="card">
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
        <div className="description">{trailData.trailDescription}</div>
        <div className="map">{trailData.trailMap}</div>
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
};

export default ShowTrailDetailPage;
