import '../ShowTrailDetailPage.css'

let ShowTrailPhoto = ({photo,photoDescription}) => {
                    return (
                      <a href={photo}>
                        <span>
                          <img className='photo-thumbnails' src={photo} alt="trail" />
                          <h5>{photoDescription}</h5>
                        </span>
                      </a>
                    )
                  }

export default ShowTrailPhoto