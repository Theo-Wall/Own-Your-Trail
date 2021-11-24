import Header from './pages/pageComponents/Header'
import NavBar from './pages/pageComponents/NavBar'
import MainPage from './pages/MainPage'
import CreateTrailPage from './pages/CreateTrailPage'
import { useState } from 'react'



function App() {
  const [createTrailState, setCreateTrailState] = useState()
  let createTrailButtonHandler = () => {
      setCreateTrailState(true)
      console.log('click!',createTrailState)
  }

  return (
    <div>
      {/* The ultimate App! */}
      <Header />
      <NavBar toCreateTrail={createTrailButtonHandler} />
      {createTrailState ? <CreateTrailPage /> : <MainPage /> } {/*<MainPage /> : null}*/}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
