import React from 'react';
import "../styles/background.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import 'react-awesome-button/dist/themes/theme-blue.css';
import Typical from 'react-typical';
import Robot from './robot';
import Particles from "reactparticles.js";


class Background extends React.Component {


	render(){
        return (
     <div className="backgroundWrapper">
            <div className="top-container">
          
             <div>
               <Typical steps={['Hello 👋', 1500]} loop={Infinity} wrapper="span" className={'myname'}  />
             </div>
             <br></br>
             <div>
               <Typical steps={['', 1500,'I am Kanyarut Pornamnuay',4000]}  wrapper="span" className={'myname'}  />
             </div>
             <br></br>
              <div>
               <Typical steps={['', 1500,'', 2000,'I am a Full Stack Web Developer 🧐', 4000, 'Front End Developer 🤓', 2000,'Back End Developer 😎', 2000,]} loop={Infinity} wrapper="span" className={'jobTitle'}  />
             </div>
     
             <br></br>
          <AwesomeButton><a href="#aboutMe" style={{color:'white'}}>View My Work</a></AwesomeButton>
            <br></br>

            
                
    <Particles
    id="config-1"
    config="particles/config-1.json"
    style={{
      width: "100%",
      height: "100%",
      opacity: "50px",
      color: {
        value: "#00FFFF"
       },
       line_linked: {
        color: {
        value: "#00FFFF"
        }
     },
    }}
    className="particles-class-name"
  />
  
   <Robot/> 


   </div>
  </div>

  
       );
    }
 };
export default Background;