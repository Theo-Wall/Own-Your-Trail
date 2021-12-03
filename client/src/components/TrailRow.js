// const fetchTrailData = {
//     userId: 1,
//     trailName: "the trail1" ,
//     photos: ["https://www.google.com/maps/d/thumbnail?mid=1f0DqYdEHXIWs25ACkMNiMZ-Wkpw"," https://thePhotoDamIt.com"],
//     trailDescription: "I walked this trail every day with my grand pappy and so should you.",
//     trailMap: "turn left at cowboy ave and take a right at lasso st"
// }

// import { CloudinaryContext, Image } from 'cloudinary-react'

import './ListTrails.css'

import { useNavigate } from 'react-router-dom'
import Card from '../pages/pageComponents/ui/Card';

const TrailRow = ({id, name, photos, description, map, primaryPhoto }) => {
    const navigate = useNavigate ()

    const setId = (id) => {    
        navigate ('/ShowTrailDetailPage/'+id)
    }

    return (
        <Card>
        <ul onClick={() => {setId(id)}}>    
            <li>{name}</li>
            <li>
                <img className='photo-thumbnails' src={photos[primaryPhoto].url} alt="trail" />
            </li>
            <li>{description}</li>
            <li>{map}</li>
        </ul>    
        </Card>
    );
};

export default TrailRow