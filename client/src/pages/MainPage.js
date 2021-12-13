import "./MainPage.css";
// import SideRefinedSearch from "../components/SideRefinedSearch";
import Modal from "../components/modal/Modal";
import LoginDetails from "../components/LoginDetails";
import ListQuadrants from "../components/ListQuadrants"
import { useNavigate } from "react-router-dom"

const MainPage = ({ loginScreenState, setLoginScreenState }) => {

  const navigate = useNavigate()

  const selectAllHandler = () => {
    let quadrant = "ListAllTrails"
    navigate('/ListTrailsPage/' + quadrant)
  }
  const selectNEHandler = () => {
    let quadrant = "NE";
    navigate("/ListTrailsPage/" + quadrant);
  }
  const selectNWHandler = () => {
    let quadrant = "NW";
    navigate("/ListTrailsPage/" + quadrant);
  }
  const selectSEHandler = () => {
    let quadrant = "SE";
    navigate("/ListTrailsPage/" + quadrant);
  }
  const selectSWHandler = () => {
    let quadrant = "SW";
    navigate("/ListTrailsPage/" + quadrant);
  }

    console.log ('main page', loginScreenState)
  return (
    <div className="main-area">
      <div className="main">
            <ListQuadrants
              displayAllTrails={selectAllHandler}
              displayNEQuadrant={selectNEHandler}
              displayNWQuadrant={selectNWHandler}
              displaySEQuadrant={selectSEHandler}
              displaySWQuadrant={selectSWHandler}
            />
      </div>
      <Modal
        title="Login Screen"
        show={loginScreenState}
        onClose={() => setLoginScreenState(false)}
      >
        <LoginDetails setLoginScreenState={setLoginScreenState} />
      </Modal>
    </div>
  );
};

export default MainPage;
