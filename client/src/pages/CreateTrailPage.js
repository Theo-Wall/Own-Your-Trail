import "./CreateTrailPage.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DisplayPhotoUpload from "../components/DisplayPhotoUpload";
import LoginScreen from "../components/Login/LoginScreen";
import AuthVerify from "../components/Login/AuthVerify"

const CreateTrailPage = ({ loginScreenState, setLoginScreenState, registrationScreenState, setRegistrationScreenState, token, setToken, isLoggedIn, setIsLoggedIn, userInfo, setUserInfo }) => {
  const navigate = useNavigate();

  // initializes useState for capturing form data and useRef for capturing photo upload data

  const trailPhoto = useRef(""); // useRef captures photo data before upload

  const [photoDescription, setPhotoDescription] = useState(" ");
  const [trailTitle, setTrailTitle] = useState("");
  const [trailDescription, setTrailDescription] = useState("");
  const [trailLocation, setTrailLocation] = useState("");
  const [quadrant, setQuadrant] = useState("");
  const [primaryPhoto, setPrimaryPhoto] = useState(0);
  const [ uploadButtonDisable, setUploadButtonDisable] = useState(true)
  const [ createButtonDisable, setCreateButtonDisable] = useState(true)
  // useState for capturing image upload data after upload

  const [imagesUpload, setImagesUpload] = useState([]);

  // captures data from various setters in from the form inputs as they are filled in

  const onInput = (event, setter) => {
    let newValue = event.target.value;
    setter(newValue);
  };

  // function that uploads the photos to cloudinary server and sets the ImageUpload variable to array of returned urls

  const uploadImage = async (event) => {
    event.preventDefault();
    const files = trailPhoto.current.files;
    const imageData = new FormData();

    imageData.append("image", files[0]);

    // fetch request to addImage endpoint. appended data is sent to the endpoint and image url is returned

    let imageUrl = await fetch('/api/addImage', {
      method: "POST",
      body: imageData,
      headers: {
        Accept: "multipart/form-data",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
      });

    // organizing the data from the cloudinary response, allows for photos/descriptions to be saved one after another
    // console.log(imageUrl)
    // console.log(imageUrl.data[0].url)

    imageUrl.data[0].description = photoDescription;

    let oldPhotoArray = imagesUpload;
    let newPhotoArray = [...oldPhotoArray, imageUrl.data[0]];

    setImagesUpload(newPhotoArray);
    setPhotoDescription("");
  
    setCreateButtonDisable(false)
    trailPhoto.current.value = "";

  };

  // captures the rest of the input data from the form. also assigns the image url to the new Trail object. We need to
  // work on how to upload multiple photos at once.

  const captureNewTrailData = async (event) => {
    event.preventDefault();

    const newTrail = {
      userId: userInfo.userId,
      userName: userInfo.userName,
      trailName: trailTitle,
      photos: imagesUpload,
      trailDescription: trailDescription,
      trailMap: trailLocation,
      cityQuadrant: quadrant,
      primaryPhoto: parseInt(primaryPhoto),
      trailRating: 0,
    };

    const response = await fetch('/api/createTrail', {
        method: "POST",
        body: JSON.stringify(newTrail),
        headers: {
          "x-access-token": token,
          "Content-Type": "application/json",
        },
      });

      const createTrailResponse = await response.json()
      console.log ("this is the response:", createTrailResponse)
      if (!createTrailResponse.message) {
        navigate("/"); // navigates back to the main page after the create trail button has been clicked and all data is collected
        return
      }

      setLoginScreenState(true)

};

  return (
    // Form for inputting trail data and image upload. We need to make this pretty :)

    <div>
      <h3>Create Your Trail</h3>
      <form className="body">
        <div className="main-input">
          <h4>Trail Info</h4>
          <div className="trail-title">
            <label htmlFor="trailTitle">Trail Name:</label>
            <input
              value={trailTitle}
              onChange={(event) => onInput(event, setTrailTitle)}
              id="trailTitle"
              type="text"
              placeholder="Your Trail Title"
              required
            ></input>
          </div>

          <div className="trail-location">
            <label htmlFor="location">Trail Map or Location:</label>
            <input
              value={trailLocation}
              onChange={(event) => onInput(event, setTrailLocation)}
              id="location"
              type="text"
              placeholder="Your Trail's Location"
              required
            ></input>
          </div>
          <div>
            <div className="radio-inputs">
              <div>
                <div className="city-quadrant">City Quadrant:</div>
                <label htmlFor="NE">North East</label>
                <input
                  className="radio-button"
                  type="radio"
                  id="NE"
                  name="cityQuadrant"
                  value="NE"
                  onChange={(event) => onInput(event, setQuadrant)}
                ></input>
                <label htmlFor="NW">North West</label>
                <input
                  type="radio"
                  id="NW"
                  name="cityQuadrant"
                  value="NW"
                  onChange={(event) => onInput(event, setQuadrant)}
                ></input>

                <label htmlFor="SE">South East</label>
                <input
                  type="radio"
                  id="SE"
                  name="cityQuadrant"
                  value="SE"
                  onChange={(event) => onInput(event, setQuadrant)}
                ></input>
                <label htmlFor="SW">South West</label>
                <input
                  type="radio"
                  id="SW"
                  name="cityQuadrant"
                  value="SW"
                  onChange={(event) => onInput(event, setQuadrant)}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="trail-description">
          <label htmlFor="trailDescription"></label>
          <textarea
            value={trailDescription}
            onChange={(event) => onInput(event, setTrailDescription)}
            id="trailDescription"
            type="text"
            placeholder="Briefly describe your trail"
            required
          ></textarea>
          {createButtonDisable ? (
            <button
              onClick={(event) => {
                captureNewTrailData(event);
              }}
              disabled={createButtonDisable}
              className="input-disabled"
            >
              Create Your Trail
            </button>
          ) : (
            <button
              onClick={(event) => {
                captureNewTrailData(event);
              }}
              className="input"
            >
              Create Your Trail
            </button>
          )}
        </div>
        <div className="trail-photos">
          <h4>Trail Photos</h4>
          <DisplayPhotoUpload
            setUploadButtonDisable={() => {setUploadButtonDisable(false)}}
            uploadButtonDisable={uploadButtonDisable}
            imageData={imagesUpload}
            onUpload={uploadImage}
            photos={trailPhoto}
            onDescribe={(event) => onInput(event, setPhotoDescription)}
            defaultDescription={photoDescription}
            onPrimaryPhoto={(event) => onInput(event, setPrimaryPhoto)}
          />
        </div>
      </form>

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

export default CreateTrailPage;
