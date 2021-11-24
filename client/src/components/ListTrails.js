import './ListTrails.css'
import { useState, useEffect } from 'react'

// const fetchTrailData = {
//     userId: 1,
//     trailName: "the trail1" ,
//     photos: ["https://www.google.com/maps/d/thumbnail?mid=1f0DqYdEHXIWs25ACkMNiMZ-Wkpw"," https://thePhotoDamIt.com"],
//     trailDescription: "I walked this trail every day with my grand pappy and so should you.",
//     trailMap: "turn left at cowboy ave and take a right at lasso st"
// }

const ListTrails = () => {
    const [trailData, setTrailData] = useState([])
    
    useEffect(() => {
        const fetchTrailData = async () => {
          let fetchResult = await fetch('/api/listTrails')
          let fetchedTrails = await fetchResult.json()
          setTrailData(fetchedTrails)  
        }
        fetchTrailData()
      }, [])
    
    console.log(trailData)
    return (
        <div className='trails-table'>
            <h3>Trail Title</h3>
            <table>
                <thead>
                    <tr>
                        <th>Col 1</th>
                        <th>Col 2</th>
                        <th>Col 3</th>
                        <th>Col 4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{trailData.trailName}</td>
                        <td>{trailData.photos}</td>
                        <td>{trailData.trailDescription}</td>
                        <td>{trailData.trailMap}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListTrails