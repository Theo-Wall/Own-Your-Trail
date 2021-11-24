import './CreateTrailPage.css'

const CreateTrailPage = () => {

    const captureNewTrailData = () => {
        console.log('click')
    }

    return (
        <div>
            <h3>Create Your Trail</h3>
            <form>
                <div className="trail-title">
                    <label htmlFor="trailTitle">Trail Name:</label>
                    <input id="trailTitle" type="text" placeholder="Your Trail Title"></input>
                </div>
                <div className="trail-description">
                    <label htmlFor="trailDescription">Trail Description:</label>
                    <textarea   id="trailDescription" 
                                type="text" 
                                placeholder="Briefly describe your trail"></textarea>
                </div>
                <div className="trail-location">
                    <label htmlFor="location">Trail Map or Location:</label>
                    <input id="location" type="text" placeholder="Your Trail's Location"></input>
                </div>
                <div className="trail-photos">
                    <label htmlFor="photos">Trail photos:</label>
                    <input id="photos" type="text" placeholder="Your photo URLs"></input>
                </div>
            </form>
            {/* <button onClick = {captureNewTrailData}>Create Your Trail</button> */}
        </div>
    )
}

export default CreateTrailPage