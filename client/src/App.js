import Header from './pages/pageComponents/Header'
import NavBar from './pages/pageComponents/NavBar'
import MainPage from './pages/MainPage'
import CreateTrailPage from './pages/CreateTrailPage'
import {useState} from "react"
import { Routes,Route } from "react-router-dom";



function App() {
  // const [createTrailState, setCreateTrailState] = useState()
  // let createTrailButtonHandler = () => {
    //     setCreateTrailState(true)
    //     console.log('click!',createTrailState)
    // }
  
  const [trailId, setTrailId]=useState('')
    
  return (
    <div>
      {/* Header and NavBar should always be outside of the Routes due to the fact that they are always going to be on the page */}
      <NavBar setTrailId = {setTrailId}/> 
      {/* This is the old way we used to route our pages */}
      {/* {{createTrailState ? <CreateTrailPage /> : <MainPage /> } {/*<MainPage /> : null}*/}
      
      {/* Here is where we direct our routes to the pages they want to go. */}
      <Routes>
        <Route path="/" element={<MainPage trailId = {trailId} setTrailId = {setTrailId} />} />
        <Route path="/createTrailPage" element={<CreateTrailPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
