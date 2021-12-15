import "./ListQuadrants.css"
import Card from './ui/Card'
import allTrailsPhoto from '../websitephotos/mainPageAllTrails.jpeg'
import neQuadrantPhoto from '../websitephotos/mainPageNEQuadrant.jpeg'
import nwQuadrantPhoto from '../websitephotos/mainPageNWQuadrant.jpeg'
import seQuadrantPhoto from '../websitephotos/mainPageSEQuadrant.jpeg'
import swQuadrantPhoto from '../websitephotos/mainPageSWQuadrant.png'

const ListQuadrants = ({displayAllTrails, displayNEQuadrant, displayNWQuadrant, displaySEQuadrant, displaySWQuadrant}) => {


  return (
    <div>
      <div>
        <div>
          <div className="scroll-box-quadrants">
            <Card>
              <div className="card-body-quadrant" onClick={displayAllTrails}>
                <div className="title-text">All Trails</div>
                <img
                  alt="Quadrant"
                  className="quadrant-photo"
                  src={allTrailsPhoto}
                />
              </div>
            </Card>
            <Card>
              <div className="card-body-quadrant" onClick={displayNEQuadrant}>
                <div className="title-text">North East Calgary</div>
                <img
                  alt="Quadrant"
                  className="quadrant-photo"
                  src={neQuadrantPhoto}
                />
              </div>
            </Card>
            <Card>
              <div className="card-body-quadrant" onClick={displayNWQuadrant}>
                <div className="title-text">North West Calgary</div>
                <img
                  alt="Quadrant"
                  className="quadrant-photo"
                  src={nwQuadrantPhoto}
                />
              </div>
            </Card>
            <Card>
              <div className="card-body-quadrant" onClick={displaySEQuadrant}>
                <div className="title-text">South East Calgary</div>
                <img
                  alt="Quadrant"
                  className="quadrant-photo"
                  src={seQuadrantPhoto}
                />
              </div>
            </Card>
            <Card>
              <div className="card-body-quadrant" onClick={displaySWQuadrant}>
                <div className="title-text">South West Calgary</div>
                <img
                  alt="Quadrant"
                  className="quadrant-photo"
                  src={swQuadrantPhoto}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListQuadrants