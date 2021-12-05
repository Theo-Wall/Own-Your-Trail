import ShowTrailPhoto from "../pages/pageComponents/ShowTrailPhoto"

const DisplayPhotoUpload = ({photos, imageData, onUpload, onDescribe, defaultDescription}) => {

  console.log('inside display photo upload:', imageData)

  return (
    <div className="trail-photos">

        <div>
          <label htmlFor="photos">Trail photos:</label>
          <input ref={photos} id="photos"  type="file" name="image" accept="image/*" multiple={false}></input>
          <label htmlFor="photoDescription">Describe Photo</label>
          <input id="photoDescription" type="text" onChange={onDescribe} value={defaultDescription}></input>
          <button onClick={onUpload}>Upload Photos</button>
        </div>
        {
          imageData.map((image => {
            return <ShowTrailPhoto key={image.id}
                                   photo={image.url}
                                   photoDescription={image.description} 
            
            />
          }))
        }
    </div>
  )
}



export default DisplayPhotoUpload