import "./TrailRow.css";

import { useNavigate } from "react-router-dom";
import Card from "./ui/Card";

const TrailRow = ({ id, name, photos, description, map, primaryPhoto }) => {
  const navigate = useNavigate();

  const setId = (id) => {
    navigate("/ShowTrailDetailPage/" + id);
  };

  return (
    <Card>
        <div
          onClick={() => {
            setId(id);
          }}
          className="card-body"
        >
          <h4 className="card-title">{name}</h4>
          <div className="card-photo">
            <img
              className="photo-thumbnails"
              src={photos[primaryPhoto].url}
              alt="trail"
            />
          </div>
          <div className="card-content">
            <p>{description}</p>
            <p>{map}</p>
          </div>
        </div>
      



    </Card>
  );
};

export default TrailRow;
