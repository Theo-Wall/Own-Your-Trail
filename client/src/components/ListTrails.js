import './ListTrails.css'
import { useState, useEffect } from 'react'
import TrailRow from './TrailRow'


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
    
    return (
        
        <div>
            <h3 className='trails-table'>Trail Title</h3>              
                 <div className='scroll-box'>
                    <div className='card-grid'>
                        {
                        trailData.map((trail)=> {
                            return (
                                <TrailRow   key={trail._id}
                                            id={trail._id}
                                            name={trail.trailName}
                                            photos={trail.photos}
                                            primaryPhoto={trail.primaryPhoto}
                                            description={trail.trailDescription}
                                            cityQuadrant={trail.cityQuadrant}
                                /> )
                            })
                        }
                    </div>
                </div>
        </div>
    )
}

export default ListTrails