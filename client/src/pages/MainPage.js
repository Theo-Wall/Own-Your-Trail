import "./MainPage.css";
// import SideRefinedSearch from "../components/SideRefinedSearch";
import ListQuadrants from "../components/ListQuadrants"
import BackgroundCard from "../components/ui/BackgroundCard"
import { useNavigate } from "react-router-dom"
import LoginScreen from "../components/Login/LoginScreen";

const MainPage = ({ loginScreenState, setLoginScreenState, registrationScreenState, setRegistrationScreenState, setToken, setIsLoggedIn }) => {

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
        <BackgroundCard>
            <ListQuadrants
              displayAllTrails={selectAllHandler}
              displayNEQuadrant={selectNEHandler}
              displayNWQuadrant={selectNWHandler}
              displaySEQuadrant={selectSEHandler}
              displaySWQuadrant={selectSWHandler}
            />
        </BackgroundCard>
      </div>
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
        registrationScreenState={registrationScreenState}
        setRegistrationScreenState={setRegistrationScreenState}
        setToken={setToken}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default MainPage;
