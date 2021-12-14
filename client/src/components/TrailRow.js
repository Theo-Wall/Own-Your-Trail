import "./TrailRow.css";

// import TrailRating from "../components/TrailRating"
import { Rating } from "react-simple-star-rating"
import { useNavigate } from "react-router-dom";
import Card from "./ui/Card";

const TrailRow = ({ id, name, photos, description, cityQuadrant, primaryPhoto, trailRating }) => {
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
            className="card-photos"
            src={photos[primaryPhoto].url}
            alt="trail"
          />
        </div>
        <div className="card-content">
          <div className="card-quadrant">City Quadrant: {cityQuadrant}</div>
          <div className="card-directions">
            <Rating
              size={20}
              ratingValue={trailRating*20}
              label
              transition
              readonly={true}
              fillColor="orange"
              emptyColor="gray"
              className="foo"
            />
            {trailRating}
            {/* <TrailRating starRating={50}/> */}
          </div>
          <div className="card-description">{description}</div>
        </div>
      </div>
    </Card>
  );
};

export default TrailRow;
