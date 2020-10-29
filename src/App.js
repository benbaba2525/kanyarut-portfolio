import React from 'react';
import './App.css';
import NavBar from './component/navBar.jsx';
import Background from './component/background.jsx';
import About from './component/about.jsx';
import Portfolio from './component/portfolio.jsx';



function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Background />
      <About />
      <Portfolio />

      
    </div>
  );
}

export default App;
