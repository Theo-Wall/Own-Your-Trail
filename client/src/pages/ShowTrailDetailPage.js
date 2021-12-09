import "./ShowTrailDetailPage.css";
import ShowTrailPhoto from "../components/ShowTrailPhoto";
import Modal from '../components/modal/Modal'
import LoginDetails from "../components/LoginDetails";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

let ShowTrailDetailPage = ({ loginScreenState, setLoginScreenState }) => {
  let params = useParams();
  let trailId = params.id;

  const [trailData, setTrailData] = useState([]);

  useEffect(() => {
    const fetchTrailData = async () => {
      let fetchResult = await fetch("/api/getTrailInfo/" + trailId);
      let fetchedTrail = await fetchResult.json();
      setTrailData(fetchedTrail);
    };
    fetchTrailData();
  }, [trailId]);

  return (
    <div>
      <h3>{trailData.trailName}</h3>
      <div>
        {trailData.photos &&
          trailData.photos.map((photo, index) => {
            return (
              <ShowTrailPhoto
                key={photo._id}
                photo={photo.url}
                photoDescription={photo.description}
                arrayIndex={index}
              />
            );
          })}
      </div>
      <div>{trailData.trailDescription}</div>
      <div>{trailData.trailMap}</div>

      <Modal title="Login Screen" show={loginScreenState } onClose={()=>setLoginScreenState(false)}>
        <LoginDetails setLoginScreenState={setLoginScreenState} />
      </Modal>
    </div>
  );
};

export default ShowTrailDetailPage;
