import React from 'react';
import './App.css';
import NavBar from './component/navBar.jsx';
import Background from './component/background.jsx';
import About from './component/about.jsx';
import Portfolio from './component/portfolio.jsx';
import Contact from './component/contact.jsx';
//import ScrollUpButton from "react-scroll-up-button"; 
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";


function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Background />
      <About />
      <Portfolio />
      <Contact />
      <ScrollUpButton/>
    </div>
  );
}

export default App;
