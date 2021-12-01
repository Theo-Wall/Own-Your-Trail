
import NavBar from './pages/pageComponents/NavBar'
import MainPage from './pages/MainPage'
import CreateTrailPage from './pages/CreateTrailPage'
import ShowTrailDetailPage from './pages/ShowTrailDetailPage'

import { Routes,Route } from "react-router-dom";



function App() {
  // const [createTrailState, setCreateTrailState] = useState()
  // let createTrailButtonHandler = () => {
    //     setCreateTrailState(true)
    //     console.log('click!',createTrailState)
    // }
    
  return (
    <div>
      {/* Header and NavBar should always be outside of the Routes due to the fact that they are always going to be on the page */}
      <NavBar /> 
      {/* This is the old way we used to route our pages */}
      {/* {{createTrailState ? <CreateTrailPage /> : <MainPage /> } {/*<MainPage /> : null}*/}
      
      {/* Here is where we direct our routes to the pages they want to go. */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/CreateTrailPage" element={<CreateTrailPage />} />
        <Route path="/ShowTrailDetailPage/:id" element={<ShowTrailDetailPage />} />
        <Route path="*" element = {<MainPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
