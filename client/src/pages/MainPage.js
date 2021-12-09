import "./MainPage.css";
import ListTrails from "../components/ListTrails";
import SideRefinedSearch from "../components/SideRefinedSearch";
import Modal from "../components/modal/Modal";
import LoginDetails from "../components/LoginDetails";

const MainPage = ({ loginScreenState, setLoginScreenState }) => {
    console.log ('main page', loginScreenState)
  return (
    <div className="main-area">
      <div className="refined-search">
        <SideRefinedSearch />
      </div>
      <div className="main">
        <ListTrails />
      </div>
      <Modal
        title="Login Screen"
        show={loginScreenState}
        onClose={()=>setLoginScreenState(false)}
      >
        <LoginDetails setLoginScreenState={setLoginScreenState} />
      </Modal>
    </div>
  );
};

export default MainPage;
