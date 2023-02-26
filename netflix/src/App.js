
import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {action,originals,comedy,romancemovie,horrormovie} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
function App() {

  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Originals'/>
     <RowPost url={action} title='Action' isSmall/>
     <RowPost url={comedy} title='comedy' isSmall/>
     <RowPost url={romancemovie} title='romance' isSmall/>
     <RowPost url={horrormovie} title='horrormovie' isSmall/>

    </div>
  );
}

export default App;
