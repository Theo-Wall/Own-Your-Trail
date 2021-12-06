import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const PhotoDetailPage = () => {
  let params = useParams()
  let trailId = params.id

  const [trailData, setTrailData] = useState()

  useEffect(() => {
    const fetchTrailData = async () => {
      let fetchResult = await fetch('/api/getTrailInfo/'+trailId)
      let fetchedTrail = await fetchResult.json()
      setTrailData(fetchedTrail)

    }
    fetchTrailData()
    }, [trailId])

    // let imageIdArray = []

    useEffect(() => {
      console.log(trailData)
    //  trailData.photos.map(image => {
    //   return console.log(image._id)
    //   // imageIdArray.push(image._id)
    //  })
    }, [trailData] )

    // console.log(imageIdArray)

  return (
    <div>
      





    </div>
  )
}

export default PhotoDetailPage