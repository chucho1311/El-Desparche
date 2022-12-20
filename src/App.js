import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Principal from "./Rick-Morty/components/principal";
import "bootstrap/dist/css/bootstrap.min.css";
// import {useEffect, useState} from "react";

import Home from './Components/Home';
import Restaurants from './Components/Restaurants'
import About from './Components/About';
import Discotecas from './Components/Discotecas';
import Parks from './Components/Parks';

function App() {



  return (
    <div className="App">
      <header className="row centrar" style={{margin:0, padding:0}}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/restaurant/:id' element={<Restaurants/>}/>
          <Route path='/discoteca/:id' element={<Discotecas/>}/>
          <Route path='/park/:id' element={<Parks/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
