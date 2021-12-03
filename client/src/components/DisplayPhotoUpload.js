const DisplayPhotoUpload = ({photos, onUpload}) => {

  return (
    <div className="trail-photos">
        <label htmlFor="photos">Trail photos:</label>
        <input ref={photos} id="photos"  type="file" name="image" accept="image/*" multiple={true} required></input>
        <button onClick={onUpload}>Upload Photos</button>
    </div>
  )
}



export default DisplayPhotoUpload