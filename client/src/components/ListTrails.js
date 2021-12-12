import TrailRow from '../components/TrailRow'

const ListTrails = (trailList) => {
  console.log(trailList.trailList)
  return (
    <div className="trails-table">
      <div className="scroll-box">
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ListTrails