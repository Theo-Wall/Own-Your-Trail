import "./MainPage.css";
// import SideRefinedSearch from "../components/SideRefinedSearch";
import ListQuadrants from "../components/ListQuadrants"
import { useNavigate } from "react-router-dom"
import LoginScreen from "../components/Login/LoginScreen";
import AuthVerify from '../components/Login/AuthVerify'

const MainPage = ({ loginScreenState, setLoginScreenState, registrationScreenState, setRegistrationScreenState, token, setToken, isLoggedIn, setIsLoggedIn, userInfo, setUserInfo }) => {

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
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
        registrationScreenState={registrationScreenState}
        setRegistrationScreenState={setRegistrationScreenState}
        setToken={setToken}
        setIsLoggedIn={setIsLoggedIn}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />
      <AuthVerify 
        token={token}
        setToken={setToken}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInfo={setUserInfo}
      />
    </div>
  );
};

export default MainPage;
