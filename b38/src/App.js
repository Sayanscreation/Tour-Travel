import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Menu from './Components/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path ='/' element={<Menu/>}></Route>
        <Route exact path ='/' element={<About/>}></Route>





        </Routes>
      </BrowserRouter>

      
      
  
    </div>
  );
}




export default App;
