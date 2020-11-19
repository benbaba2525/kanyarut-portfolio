import React from 'react';
import './App.css';
import NavBar from './component/navBar.jsx';
import Background from './component/background.jsx';
import About from './component/about.jsx';
import Skills from './component/skills';
import Portfolio from './component/portfolio.jsx';
import Contact from './component/contact.jsx';
import Footer from './component/footer.jsx';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Background />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollUpButton/>
      
    </div>
  );
}

export default App;
