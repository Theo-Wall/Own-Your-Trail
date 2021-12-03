import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const PhotoDetailPage = () => {
  let params = useParams()
  let trailId = params.id

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
      {console.log(trailData)}


    </div>
  )
}

export default PhotoDetailPage