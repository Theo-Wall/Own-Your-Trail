const DisplayPhotoUpload = ({photos, imageData, onUpload, onDescribe}) => {

  console.log('inside display photo upload:', imageData)

  return (
    <div className="trail-photos">
        {
          imageData.map((image => {
            return <img src={image.url} alt="Trail" width="200" ></img>
          }))
        }
        <div>
          <label htmlFor="photos">Trail photos:</label>
          <input ref={photos} id="photos"  type="file" name="image" accept="image/*" multiple={false} required></input>
          <label htmlFor="photoDescription">Describe Photo</label>
          <input id="photoDescription" type="text" onChange={onDescribe}></input>
          <button onClick={onUpload}>Upload Photos</button>
        </div>
    </div>
  )
}



export default DisplayPhotoUpload