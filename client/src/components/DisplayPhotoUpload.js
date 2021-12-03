const DisplayPhotoUpload = ({photos, onUpload, onDescribe}) => {

  return (
    <div className="trail-photos">
        <label htmlFor="photos">Trail photos:</label>
        <input ref={photos} id="photos"  type="file" name="image" accept="image/*" multiple={false} required></input>
        <label htmlFor="photoDescription">Describe Photo</label>
        <input id="photoDescription" type="text" onChange={onDescribe}></input>
        <button onClick={onUpload}>Upload Photos</button>
    </div>
  )
}



export default DisplayPhotoUpload