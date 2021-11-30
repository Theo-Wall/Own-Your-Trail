// const fetchTrailData = {
//     userId: 1,
//     trailName: "the trail1" ,
//     photos: ["https://www.google.com/maps/d/thumbnail?mid=1f0DqYdEHXIWs25ACkMNiMZ-Wkpw"," https://thePhotoDamIt.com"],
//     trailDescription: "I walked this trail every day with my grand pappy and so should you.",
//     trailMap: "turn left at cowboy ave and take a right at lasso st"
// }

// import { CloudinaryContext, Image } from 'cloudinary-react'
const TrailRow = ({ setTrailId, id, name, photos, description, map,primaryPhoto }) => {

    const setId = (id) => {
        setTrailId(id)
    }

    return (
        <tr>
            <td onClick={() => {setId(id)}}>{name}</td>
            <td>{photos[primaryPhoto].url}</td>
            <td>{description}</td>
            <td>{map}</td>
        </tr>
    );
};

export default TrailRow