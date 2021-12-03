import './CreateTrailPage.css'
import { useState,useRef } from 'react'
// import { useNavigate } from 'react-router-dom'
import DisplayPhotoUpload from '../components/DisplayPhotoUpload'



const CreateTrailPage = () => {


    // sets page to display photo upload or to add the descriptions of the uploads

    // initializes useState for capturing form data

    // should trail photos be an array?
    const trailPhotos = useRef()
    const [ photoDescription, setPhotoDescription ] = useState('')
    const [ userId, setUserId ] = useState('')
    const [ trailTitle, setTrailTitle ] = useState('')
    const [ trailDescription, setTrailDescription ] = useState('')
    const [ trailLocation, setTrailLocation ] = useState('')
    const [ quadrant, setQuadrant ] = useState('')
    // useState for capturing image upload data

    const [ imageUpload, setImageUpload ] = useState([])

    // function that uploads the photos to cloudinary server and sets the ImageUpload variable to array of returned urls

    const onInput = (event, setter) => {
        let newValue = event.target.value
        setter(newValue)
        console.log(newValue)
    }

    // const setId = async (id) => {
    //     let transferId = await id
    //     console.log(transferId)
    //     navigate('/PhotoDetail/'+ transferId)
    // }

    const uploadImage = async (event) => {
        event.preventDefault()
        const files = trailPhotos.current.files
        const imageData = new FormData()
        
        for (let i = 0; i < Object.keys(files).length; i++) {
            imageData.append('image', files[i])  
        }        

        // fetch request to addImage endpoint. appended data is sent to the endpoint and image url is returned

        let imageUrl = await fetch(`http://localhost:5001/api/addImage`, {
                method: 'POST',
                body: imageData,
                headers: {
                    Accept: 'multipart/form-data', 
                },
                credentials: 'include',
            })
            .then(res => res.json())
            .catch(error => {
                console.error(error)
            })
        imageUrl.data[0].description = photoDescription

        let oldPhotoArray = imageUpload
        let newPhotoArray = [...oldPhotoArray, imageUrl.data[0]]
        console.log(newPhotoArray)
        setImageUpload(newPhotoArray) // add description for photo here ****
    }  

    // captures the rest of the input data from the form. also assigns the image url to the new Trail object. We need to
    // work on how to upload multiple photos at once.

    const captureNewTrailData = async (event) => {
        // try{
            event.preventDefault()

            const newTrail = {  userId: userId,
                                trailName: trailTitle,
                                photos: imageUpload, //should be array
                                trailDescription: trailDescription,
                                trailMap: trailLocation,
                                cityQuadrant: quadrant,
                                primaryPhoto: 0
                }

            console.log('click', newTrail)
            
            await fetch(`http://localhost:5001/api/createTrail`, {
            method: 'POST',
            body: JSON.stringify(newTrail),
            headers: {
                'Content-Type': 'application/json', 
                },
            })

            // const newId = await res.json()
            // navigate('/PhotoDetail/' + newId)


    }                       

    return (

        // Form for inputting trail data and image upload. We need to make this pretty :)

        <div >
            <h3>Create Your Trail</h3>
            <form className="body">
                
                <div className="main-input">
                    <h5>Trail Info</h5>
                    <div className="user-name">
                        <label htmlFor="userName">User Name:</label>
                        <input value={userId} onChange={(event) => onInput(event, setUserId)} id="userName" type="text" placeholder="Your name" required></input>
                    </div>
                    <div className="trail-title">
                        <label htmlFor="trailTitle">Trail Name:</label>
                        <input value={trailTitle} onChange={(event) => onInput(event, setTrailTitle)} id="trailTitle" type="text" placeholder="Your Trail Title" required></input>
                    </div>

                    <div className="trail-location">
                        <label htmlFor="location">Trail Map or Location:</label>
                        <input value={trailLocation} onChange={(event) => onInput(event, setTrailLocation)} id="location" type="text" placeholder="Your Trail's Location" required></input>
                    </div>
                    <div>
                      <span>City Quadrant:</span>
                      <label htmlFor="NE">North East</label>
                      <input type="radio" id="NE" name="cityQuadrant" value="NE" onChange={(event) => onInput(event, setQuadrant)}></input> 
                      <label htmlFor="NW">North West</label>
                      <input type="radio" id="NW" name="cityQuadrant" value="NW" onChange={(event) => onInput(event, setQuadrant)}></input> 
                      <label htmlFor="SE">South East</label>
                      <input type="radio" id="SE" name="cityQuadrant" value="SE" onChange={(event) => onInput(event, setQuadrant)}></input> 
                      <label htmlFor="SW">South West</label>
                      <input type="radio" id="SW" name="cityQuadrant" value="SW" onChange={(event) => onInput(event, setQuadrant)}></input> 
                    </div>
                    <br/>
                    <button onClick = {(event)=>{captureNewTrailData(event)}}>Create Your Trail</button>   
                </div>
                <div className="trail-description">
                    <label htmlFor="trailDescription"></label>
                    <textarea   value={trailDescription}
                                cols="40" 
                                rows="8"
                                onChange={(event) => onInput(event, setTrailDescription)}
                                id="trailDescription" 
                                type="text" 
                                placeholder="Briefly describe your trail"
                                required
                                ></textarea>
                </div>
            <div>
                <h5>Trail Photos</h5>
                <DisplayPhotoUpload onUpload={uploadImage} photos={trailPhotos} onDescribe={(event) => onInput(event, setPhotoDescription)}/>
            </div> 

            </form>

        </div>
    )
}

export default CreateTrailPage