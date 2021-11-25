import './CreateTrailPage.css'
import {useRef} from 'react'

const CreateTrailPage = () => {
    const userId = useRef()
    const trailTitle = useRef()
    const trailDescription = useRef()
    const trailLocation = useRef()
    const trailPhotos = useRef()

    const captureNewTrailData = (event) => {
        const user = userId.current.value
        const title = trailTitle.current.value
        const description = trailDescription.current.value
        const location = trailLocation.current.value
        const photos = trailPhotos.current.value

        const newTrail = {  userId: user,
                            trailName: title,
                            photos: photos,
                            trailDescription: description,
                            trailMap: location}

        console.log('click', newTrail)
        event.preventDefault()
    }

    return (
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
                    <input ref={trailPhotos} id="photos" type="text" placeholder="Your photo URLs"></input>
                </div>
                <button onClick = {(event)=>{captureNewTrailData(event)}}>Create Your Trail</button>
            </form>
        </div>
    )
}

export default CreateTrailPage