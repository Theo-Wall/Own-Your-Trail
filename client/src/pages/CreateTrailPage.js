import "./CreateTrailPage.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DisplayPhotoUpload from "../components/DisplayPhotoUpload";
import Modal from '../components/modal/Modal'
import LoginDetails from "../components/LoginDetails";

const CreateTrailPage = ({ loginScreenState, setLoginScreenState }) => {
  const navigate = useNavigate();

  // initializes useState for capturing form data and useRef for capturing photo upload data

  const trailPhoto = useRef(""); // useRef captures photo data before upload

  const [photoDescription, setPhotoDescription] = useState(" ");
  const [userId, setUserId] = useState("");
  const [trailTitle, setTrailTitle] = useState("");
  const [trailDescription, setTrailDescription] = useState("");
  const [trailLocation, setTrailLocation] = useState("");
  const [quadrant, setQuadrant] = useState("");
  const [primaryPhoto, setPrimaryPhoto] = useState(0);

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

    imageUrl.data[0].description = photoDescription;

    let oldPhotoArray = imagesUpload;
    let newPhotoArray = [...oldPhotoArray, imageUrl.data[0]];

    setImagesUpload(newPhotoArray);
    setPhotoDescription("");
    trailPhoto.current.value = "";
  };

  // captures the rest of the input data from the form. also assigns the image url to the new Trail object. We need to
  // work on how to upload multiple photos at once.

  const captureNewTrailData = async (event) => {
    event.preventDefault();

    const newTrail = {
      userId: userId,
      trailName: trailTitle,
      photos: imagesUpload,
      trailDescription: trailDescription,
      trailMap: trailLocation,
      cityQuadrant: quadrant,
      primaryPhoto: parseInt(primaryPhoto),
    };

    await fetch('/api/createTrail', {
      method: "POST",
      body: JSON.stringify(newTrail),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/"); // navigates back to the main page after the create trail button has been clicked and all data is collected
  };

  return (
    // Form for inputting trail data and image upload. We need to make this pretty :)

    <div>
      <h3>Create Your Trail</h3>
      <form className="body">
        <div className="main-input">
          <h5>Trail Info</h5>
          <div className="user-name">
            <label htmlFor="userName">User Name:</label>
            <input
              value={userId}
              onChange={(event) => onInput(event, setUserId)}
              id="userName"
              type="text"
              placeholder="Your name"
              required
            ></input>
          </div>
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
            <button
              onClick={(event) => {
                captureNewTrailData(event);
              }}
              className="input"
            >
              Create Your Trail
            </button>
          </div>
        </div>
        <div className="trail-description">
          <label htmlFor="trailDescription"></label>
          <textarea
            value={trailDescription}
            cols="40"
            rows="8"
            onChange={(event) => onInput(event, setTrailDescription)}
            id="trailDescription"
            type="text"
            placeholder="Briefly describe your trail"
            required
          ></textarea>
        </div>
        <div className="trail-photos">
          <h5>Trail Photos</h5>
          <DisplayPhotoUpload
            imageData={imagesUpload}
            onUpload={uploadImage}
            photos={trailPhoto}
            onDescribe={(event) => onInput(event, setPhotoDescription)}
            defaultDescription={photoDescription}
            onPrimaryPhoto={(event) => onInput(event, setPrimaryPhoto)}
          />
        </div>
      </form>
      
      <Modal
        title="Login Screen"
        show={loginScreenState}
        onClose={()=>setLoginScreenState(false)}
      >
        <LoginDetails setLoginScreenState={setLoginScreenState} />
      </Modal>

    </div>
  );
};

export default CreateTrailPage;
