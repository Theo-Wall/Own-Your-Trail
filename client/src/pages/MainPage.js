import "./MainPage.css";
// import SideRefinedSearch from "../components/SideRefinedSearch";
import ListQuadrants from "../components/ListQuadrants"
import { useNavigate } from "react-router-dom"
import LoginScreen from "../components/Login/LoginScreen";
import AuthVerify from '../components/Login/AuthVerify'

const MainPage = ({ loginScreenState, setLoginScreenState, registrationScreenState, setRegistrationScreenState, token, setToken, isLoggedIn, setIsLoggedIn, userInfo, setUserInfo }) => {

  const navigate = useNavigate()

  const selectHandler = (key) => {
    navigate('/ListTrailsPage/' + key)
  }
    console.log ('main page', loginScreenState)
  return (
    <div className="main-area">
      <div className="main">
        <ListQuadrants
          displayAllTrails={() => selectHandler("ListAllTrails")}
          displayNEQuadrant={() => selectHandler("NE")}
          displayNWQuadrant={() => selectHandler("NW")}
          displaySEQuadrant={() => selectHandler("SE")}
          displaySWQuadrant={() => selectHandler("SW")}
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
