import '../ShowTrailDetailPage.css'

let ShowTrailPhoto = ({photo}) => {
                    return (
                      <a href={photo}>
                        <img className='photo-thumbnails' src={photo} alt="trail" />
                      </a>
                    )
                  }

export default ShowTrailPhoto