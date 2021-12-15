import "./ShowTrailDetailPage.css";
import ShowTrailPhoto from "../components/ShowTrailPhoto";
import LoginScreen from "../components/Login/LoginScreen";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating"
import AuthVerify from '../components/Login/AuthVerify'
import Card from '../components/ui/Card'

let ShowTrailDetailPage = ({ loginScreenState, setLoginScreenState, registrationScreenState, setRegistrationScreenState, token, setToken, isLoggedIn, setIsLoggedIn, userInfo, setUserInfo }) => {
  let params = useParams();
  let trailId = params.id;

  const [ trailData, setTrailData ] = useState([]);
  const [ isUserTrail, setIsUserTrail ] = useState(false);
  const [ hasNotRated, setHasNotRated ] = useState(true)
  
  useEffect(() => {
    const fetchTrailData = async () => {
      let fetchResult = await fetch("/api/getTrailInfo/" + trailId);
      let fetchedTrail = await fetchResult.json();
      setTrailData(fetchedTrail);


      let ratedCheck = await fetchedTrail.ratedBy.includes(userInfo.userId)

      console.log("rated check", ratedCheck)

      if (ratedCheck) {
        console.log("inside ratedBy")
        setHasNotRated(false)
      }
      if (fetchedTrail.userId === userInfo.userId) {
        console.log("its true");
        setIsUserTrail(true);
      }
    };
    fetchTrailData();

 

  }, [trailId, userInfo.userId, trailData.userId]);
  
  

  const handleRating = async (rate) => {
    let newNumberOfRatings = await trailData.numberOfTrailRatings + 1
    let newTrailRating = await ((trailData.trailRating * trailData.numberOfTrailRatings + ((rate / 20)-1)) / newNumberOfRatings)
    console.log(newTrailRating, (rate/20))

    let newRatedByArray = await [...trailData.ratedBy, userInfo.userId]
    console.log(newRatedByArray)
    let response

    if (token) {
      response = await fetch('/api/updateTrail/' + trailId, {
        method: "POST",
        body: JSON.stringify({
          "trailRating": newTrailRating.toFixed(1),
          "numberOfTrailRatings": newNumberOfRatings,
          "ratedBy": newRatedByArray,
        }),
        headers: {
          "x-access-token": token,
          "Content-Type": "application/json",
        },
      })
    } 

      let fetchedUpdatedTrail = await response.json()
      setTrailData(await fetchedUpdatedTrail)
      setHasNotRated(false)
  }
  return (
    <div className="centered">
     <div className="site-title">
        <h3>{trailData.trailName}</h3>
          <div className='trail-ratings'>
            {isLoggedIn && !isUserTrail && hasNotRated ? (
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
          </div>
        </div>
       
      
      <div className="photo">
        {trailData.photos &&
          trailData.photos.map((photo, index) => {
            return (
              <Card>
                <ShowTrailPhoto 
                  key={photo._id}
                  photo={photo.url}
                  photoDescription={photo.description}
                  arrayIndex={index}
                />
              </Card>
            );
          })}
      </div>
          <div className='trail-content'>
            <h5 className='trail-detail'>Trail Description:</h5>
            <div className="description">{trailData.trailDescription}</div>
            <h5 className='trail-direction'>Directions To Trail:</h5>
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
