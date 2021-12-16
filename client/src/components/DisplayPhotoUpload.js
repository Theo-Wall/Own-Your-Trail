import "./DisplayPhotoUpload.css";
import ShowCreateTrailPhoto from "../components/ShowCreateTrailPhoto";
import CreateCard from "./ui/CreateCard";

const DisplayPhotoUpload = ({
  photos,
  imageData,
  onUpload,
  onDescribe,
  defaultDescription,
  onPrimaryPhoto,
  uploadButtonDisable,
  setUploadButtonDisable,
}) => {
  return (
    <div>
      <div>
        <label className="upload-input-label" htmlFor="photos">
          Upload Photo:
        </label>
        <input
          ref={photos}
          id="photos"
          type="file"
          name="image"
          accept="image/*"
          multiple={false}
          onInput={setUploadButtonDisable}
        ></input>
        <label htmlFor="photoDescription"></label>
        <textarea
          id="photoDescription"
          placeholder="Describe Photo"
          cols="10"
          rows="4"
          className="photo-upload-description"
          type="text"
          onChange={onDescribe}
          value={defaultDescription}
        ></textarea>
        {uploadButtonDisable ? (
          <button
            className="upload-input-disabled"
            disabled={uploadButtonDisable}
          >
            Upload Photo
          </button>
        ) : (
          <button
            className="upload-input"
            onClick={onUpload}
          >
            Upload Photo
          </button>
        )}
      </div>
      <div className="photo-preview">
      {imageData.map((image, index) => {
        return (
          <CreateCard>
            <ShowCreateTrailPhoto
              key={image.id}
              photo={image.url}
              photoDescription={image.description}
              onPrimaryPhoto={onPrimaryPhoto}
              arrayIndex={index}
            />
          </CreateCard>
        );
      })}
      </div>
    </div>
  );
};

export default DisplayPhotoUpload;
