import './ShowTrailPhoto.css'


let ShowTrailPhoto = ({photo,photoDescription,onPrimaryPhoto,arrayIndex}) => {
                    return (
                      <div className='show-trail-photo'>
                        <a href={photo} style={{textDecoration: "none"}}>
                          <span className='trail-photo'>
                            <img className='photo-thumbnails' src={photo} alt="trail" />
                          </span>
                            {onPrimaryPhoto && 
                            <div>
                              <label htmlFor="primePhotoPicker">
                                <input type="radio" id="primePhotoPicker" name="primaryPhoto" onChange={onPrimaryPhoto} value={arrayIndex} />
                                Make Display Photo
                              </label>
                            </div>
                            }
                          <span className='photo-description'>
                            <h5>{photoDescription}</h5>
                          </span>  
                        </a>
                      </div>
                    )
                  }

export default ShowTrailPhoto