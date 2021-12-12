import "./ListQuadrants.css"
import Card from './ui/Card'

const ListQuadrants = ({displayAllTrails, displayNEQuadrant, displayNWQuadrant, displaySEQuadrant, displaySWQuadrant}) => {


  return (
    <div>
      <div>
        <div>
          <div className="scroll-box">
            <Card>
              <div className="card-body-quadrant" onClick={displayAllTrails}>
                <p>All Trails</p>
              </div>
            </Card>
            <Card>
              <div className="card-body-quadrant" onClick={displayNEQuadrant}>
                <p>North East Calgary</p>
              </div>
            </Card>
            <Card>
              <div className="card-body-quadrant" onClick={displayNWQuadrant}>
                <p>North West Calgary</p>
              </div>
            </Card>
            <Card>
              <div className="card-body-quadrant" onClick={displaySEQuadrant}>
                <p>South East Calgary</p>
              </div>
            </Card>
            <Card>
              <div className="card-body-quadrant" onClick={displaySWQuadrant}>
                <p>South West Calgary</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListQuadrants