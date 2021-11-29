import './ShowTrailDetailPage.css'
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
            <div>{trailData.photos}</div> {/* revise to display an array of photos*/}
            <div>{trailData.trailDescription}</div>
            <div>{trailData.trailMap}</div>
        </div>

    )
}

export default ShowTrailDetailPage