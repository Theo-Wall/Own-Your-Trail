import "./ListQuadrants.css"
import Card from './ui/Card'

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
                  src="../websitephotos/mainPageAllTrails.jpeg"
                />
              </div>
            </Card>
            <Card>
              <div className="card-body-quadrant" onClick={displayNEQuadrant}>
                <div className="title-text">North East Calgary</div>
                <img
                  alt="Quadrant"
                  className="quadrant-photo"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSM4OauXruks%2Fmaxresdefault.jpg&f=1&nofb=1"
                />
              </div>
            </Card>
            <Card>
              <div className="card-body-quadrant" onClick={displayNWQuadrant}>
                <div className="title-text">North West Calgary</div>
                <img
                  alt="Quadrant"
                  className="quadrant-photo"
                  src="http://paulsaulnier.com/wp-content/uploads/2010/10/IMG_5903.jpg"
                />
              </div>
            </Card>
            <Card>
              <div className="card-body-quadrant" onClick={displaySEQuadrant}>
                <div className="title-text">South East Calgary</div>
                <img
                  alt="Quadrant"
                  className="quadrant-photo"
                  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.thousandwonders.net%2FPrince%2527s.Island.Park.original.25354.jpg&f=1&nofb=1"
                />
              </div>
            </Card>
            <Card>
              <div className="card-body-quadrant" onClick={displaySWQuadrant}>
                <div className="title-text">South West Calgary</div>
                <img
                  alt="Quadrant"
                  className="quadrant-photo"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcalgarystairs.com%2Fwp-content%2Fuploads%2F2019%2F07%2FCalgary-Stairs-altadore-park-stairs-3-19072019.png&f=1&nofb=1"
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