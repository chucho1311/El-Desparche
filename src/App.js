import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Principal from "./Rick-Morty/components/principal";
import "bootstrap/dist/css/bootstrap.min.css";
// import {useEffect, useState} from "react";

import Home from './Components/Home';
import Place from './Components/Place'
import About from './Components/About';

function App() {



  return (
    <div className="App">
      <header className="row centrar" style={{margin:0, padding:0}}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/place/:id' element={<Place/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
