
import NavBar from './components/NavBar'
import MainPage from './pages/MainPage'
import CreateTrailPage from './pages/CreateTrailPage'
import ShowTrailDetailPage from './pages/ShowTrailDetailPage'
// import UserRegistrationPage from './pages/UserRegistrationPage'
import { Routes,Route } from "react-router-dom";
import { useState } from 'react'
import ListTrailsPage from './pages/ListTrailsPage'


function App() {
  const [loginScreenState, setLoginScreenState] = useState(false)
  const [registrationScreenState, setRegistrationScreenState] = useState(false)
  const [token,setToken] = useState (null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState ({})

  // let createTrailButtonHandler = () => {
    //     setCreateTrailState(true)
    //     console.log('click!',createTrailState)
    // }
    
  return (
    <div>
      {/* Header and NavBar should always be outside of the Routes due to the fact that they are always going to be on the page */}
      <div style={{ position: "sticky", top: "0" }}>
        <NavBar
          setLoginScreenState={setLoginScreenState}
          token={token}
          setToken={setToken}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
      </div>
      {/* This is the old way we used to route our pages */}
      {/* {{createTrailState ? <CreateTrailPage /> : <MainPage /> } {/*<MainPage /> : null}*/}

      {/* Here is where we direct our routes to the pages they want to go. */}
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              loginScreenState={loginScreenState}
              setLoginScreenState={setLoginScreenState}
              registrationScreenState={registrationScreenState}
              setRegistrationScreenState={setRegistrationScreenState}
              token={token}
              setToken={setToken}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          }
        />
        <Route
          path="/CreateTrailPage"
          element={
            <CreateTrailPage
              loginScreenState={loginScreenState}
              setLoginScreenState={setLoginScreenState}
              registrationScreenState={registrationScreenState}
              setRegistrationScreenState={setRegistrationScreenState}             
              token={token}
              setToken={setToken}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          }
        />
        <Route
          path="/ShowTrailDetailPage/:id"
          element={
            <ShowTrailDetailPage
              loginScreenState={loginScreenState}
              setLoginScreenState={setLoginScreenState}
              registrationScreenState={registrationScreenState}
              setRegistrationScreenState={setRegistrationScreenState}
              token={token}
              setToken={setToken}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          }
        />
        <Route
          path="/ListTrailsPage/:quadrant"
          element={
            <ListTrailsPage
              loginScreenState={loginScreenState}
              setLoginScreenState={setLoginScreenState}
              registrationScreenState={registrationScreenState}
              setRegistrationScreenState={setRegistrationScreenState}
              token={token}
              setToken={setToken}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          }
        />
        {/* <Route
          path="/UserRegistrationPage"
          element={
            <UserRegistrationPage
              loginScreenState={loginScreenState}
              setLoginScreenState={setLoginScreenState}
              registrationScreenState={registrationScreenState}
              setRegistrationScreenState={setRegistrationScreenState}
              token={token}
              setToken={setToken}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        /> */}
        <Route
          path="*"
          element={
            <MainPage
              loginScreenState={loginScreenState}
              setLoginScreenState={setLoginScreenState}
              registrationScreenState={registrationScreenState}
              setRegistrationScreenState={setRegistrationScreenState}
              token={token}
              setToken={setToken}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          }
        />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
