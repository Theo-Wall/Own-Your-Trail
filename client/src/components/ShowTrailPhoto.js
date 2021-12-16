import './ShowTrailPhoto.css'


let ShowTrailPhoto = ({photo,photoDescription,onPrimaryPhoto,arrayIndex}) => {
                    return (
                      <div className="show-trail-photo">
                        <a href={photo} className="a-text">
                          <div className="trail-photo">
                            <img
                              className="show-photo-thumbnails"
                              src={photo}
                              alt="trail"
                            />
                          </div>
                          {onPrimaryPhoto && (
                            <div>
                              <label
                                htmlFor="primePhotoPicker"
                                className="prime-photo-text"
                              >
                                <input
                                  className="prime-photo-picker"
                                  type="radio"
                                  id="primePhotoPicker"
                                  name="primaryPhoto"
                                  onChange={onPrimaryPhoto}
                                  value={arrayIndex}
                                />
                                Display Photo
                              </label>
                            </div>
                          )}
                          <span className="photo-description">
                            <h5 className="card-text">{photoDescription}</h5>
                          </span>
                        </a>
                      </div>
                    );
                  }

export default ShowTrailPhoto