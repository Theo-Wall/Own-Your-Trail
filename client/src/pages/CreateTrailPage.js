import './CreateTrailPage.css'
import {useRef,useState} from 'react'



const CreateTrailPage = () => {

    // initializes useRefs for capturing form data

    const userId = useRef()
    const trailTitle = useRef()
    const trailDescription = useRef()
    const trailLocation = useRef()
    const trailPhotos = useRef()

    // initializes variable to capture image url from upload

    const [ imageUpload, setImageUpload] = useState({})

    // function that uploads the photos to cloudinary server and sets the ImageUpload variable to array of returned urls

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

        setImageUpload(imageUrl.data)
        
    }  

    // captures the rest of the input data from the form. also assigns the image url to the new Trail object. We need to
    // work on how to upload multiple photos at once.

    const captureNewTrailData = (event) => {
        event.preventDefault()

        const user = userId.current.value
        const title = trailTitle.current.value
        const description = trailDescription.current.value
        const location = trailLocation.current.value

        const newTrail = {  userId: user,
                            trailName: title,
                            photos: imageUpload,
                            trailDescription: description,
                            trailMap: location,
                            primaryPhoto: 0
            }

        console.log('click', newTrail)
        
        fetch(`http://localhost:5001/api/createTrail`, {
        method: 'POST',
        body: JSON.stringify(newTrail),
        headers: {
            'Content-Type': 'application/json', 
            },
        })
            .catch(error => {
                console.error(error)
        })    

        }                       

    return (

        // Form for inputting trail data and image upload. We need to make this pretty :)

        <div>
            <h3>Create Your Trail</h3>
            <form>
                <div className="user-name">
                    <label htmlFor="userName">User Name:</label>
                    <input ref={userId} id="userName" type="text" placeholder="Your name"></input>
                </div>
                <div className="trail-title">
                    <label htmlFor="trailTitle">Trail Name:</label>
                    <input ref={trailTitle} id="trailTitle" type="text" placeholder="Your Trail Title"></input>
                </div>
                <div className="trail-description">
                    <label htmlFor="trailDescription">Trail Description:</label>
                    <textarea   ref={trailDescription}
                                id="trailDescription" 
                                type="text" 
                                placeholder="Briefly describe your trail"></textarea>
                </div>
                <div className="trail-location">
                    <label htmlFor="location">Trail Map or Location:</label>
                    <input ref={trailLocation} id="location" type="text" placeholder="Your Trail's Location"></input>
                </div>
                <div className="trail-photos">
                    <label htmlFor="photos">Trail photos:</label>
                    <input ref={trailPhotos} id="photos" type="file" placeholder="Your photo URLs" name="image" accept="image/*" multiple={true}></input>
                    <button onClick={(event) => {uploadImage(event)}}>Upload Photos</button>
                </div>
                <button onClick = {(event)=>{captureNewTrailData(event)}}>Create Your Trail</button>
            </form>
        </div>
    )
}

export default CreateTrailPage