import './ShowTrailDetailPage.css'
import ShowTrailPhoto from './pageComponents/ShowTrailPhoto'
import { useState, useEffect } from 'react'

let ShowTrailDetailPage = ({trailId}) => {
    const [trailData, setTrailData] = useState([])

    useEffect(() => {
        const fetchTrailData = async () => {
          let fetchResult = await fetch('/api/getTrailInfo/'+trailId)
          let fetchedTrail = await fetchResult.json()
          setTrailData(fetchedTrail)

        }
        fetchTrailData()
      }, [trailId])


    return (
        <div>
            <h3>{trailData.trailName}</h3>
            <div>
              {
                        trailData.photos && trailData.photos.map((photo)=> {
                            return (
                              <ShowTrailPhoto   key={photo.index}
                                                photo={photo} />
                            )
                })
              }
            </div>
            <div>{trailData.trailDescription}</div>
            <div>{trailData.trailMap}</div>
        </div>

    )
}

export default ShowTrailDetailPage