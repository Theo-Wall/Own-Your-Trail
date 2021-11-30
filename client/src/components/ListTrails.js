import './ListTrails.css'
import { useState, useEffect } from 'react'
import TrailRow from './TrailRow'

const ListTrails = ({setTrailId}) => {
    const [trailData, setTrailData] = useState([])
    
    useEffect(() => {
        const fetchTrailData = async () => {
          let fetchResult = await fetch('/api/listTrails')
          let fetchedTrails = await fetchResult.json()
          setTrailData(fetchedTrails)  
        }
        fetchTrailData()
      }, [])
    
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
                    {
                        trailData.map((trail)=> {
                            return (
                                <TrailRow   setTrailId={setTrailId}
                                            key={trail._id}
                                            id={trail._id}
                                            name={trail.trailName}
                                            photos={trail.photos}
                                            primaryPhoto={trail.primaryPhoto}
                                            description={trail.trailDescription}
                                            map={trail.trailMap}
                                /> )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListTrails