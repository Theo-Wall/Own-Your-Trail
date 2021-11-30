import './CreateTrailPage.css'
import {useRef} from 'react'



const CreateTrailPage = () => {

    // initializes useRefs for capturing form data

    const userId = useRef()
    const trailTitle = useRef()
    const trailDescription = useRef()
    const trailLocation = useRef()
    const trailPhotos = useRef()

    // initializes variable to capture image url from upload

    let imageUrl

    // upload image function triggered by upload photos button. creates a FormData object that required image data can be 
    // appended to. Then I used axios to post the data to cloudinary to save the images "https://cloudinary.com"

    const uploadImage = async (event) => {
        event.preventDefault()
        const files = trailPhotos.current.files
        const imageData = new FormData()
        // files.map((photo) => {
        //   imageData.append('image', photo)  
        // })
        imageData.append('image', files[0])  
        console.log(imageData)

        imageUrl = await fetch(`http://localhost:5001/api/addImage`, {
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

        console.log(imageUrl)

        
    }  

    // captures the rest of the input data from the form. also assigns the image url to the new Trail object. We need to
    // work on how to upload multiple photos at once.

    const captureNewTrailData = (event) => {
        const user = userId.current.value
        const title = trailTitle.current.value
        const description = trailDescription.current.value
        const location = trailLocation.current.value

        const newTrail = {  userId: user,
                            trailName: title,
                            images: [imageUrl],
                            trailDescription: description,
                            trailMap: location,
            }
            console.log('click', newTrail)
            event.preventDefault()
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