import TrailRow from '../components/TrailRow'
import './ListTrails.css'

const ListTrails = (trailList) => {
  console.log(trailList.trailList)
  return (
    <div className="trails-table">
      <div className="scroll-box-listTrails">
        <div className="card-grid">
          {trailList.trailList.map((trail) => {
            return (
              <TrailRow
                key={trail._id}
                id={trail._id}
                name={trail.trailName}
                photos={trail.photos}
                primaryPhoto={trail.primaryPhoto}
                description={trail.trailDescription}
                cityQuadrant={trail.cityQuadrant}
                trailRating={trail.trailRating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ListTrails