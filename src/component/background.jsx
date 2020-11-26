import React from "react";
import "../styles/background.scss";
import "react-awesome-button/dist/styles.css";
import "react-awesome-button/dist/themes/theme-c137.css";
import Typical from "react-typical";
import Robot from "./robot";
import Particles from "reactparticles.js";
import Particles2 from "react-particles-js";
import "animate.css/animate.min.css";




class Background extends React.Component {
  
	render(){
        return (
            <div className="backgroundWrapper">
               <div className="top-container">
                 <div>
                 <Typical steps={["Hello 👋", 1500]} loop={Infinity} wrapper="span" className={"myname"}  />
                 </div>
                 <br></br>
                 <div>
                 <Typical steps={[" ", 1500,"I am Kanyarut",4000]}  wrapper="span" className={"myname"}  />
                 </div>
                 <div>
                 <Typical steps={[" ", 1500," ", 3000,"Full Stack Developer 🧐", 4000, "Front End Developer 🤓", 2000,"Back End Developer 😎", 2000,]} loop={Infinity} wrapper="span" className={"jobTitle"}  />
                 </div>
				 
                 
				 {/* Background using Particles Bubble*/}
                        <Particles2 className="particles"
                            params={{
	                            "particles": {
	                                "number": {
	                                    "value": 200,
	                                    "density": {
	                                        "enable": false
	                                    }
	                                },
	                                "size": {
	                                    "value": 3,
	                                    "random": true,
	                                    "anim": {
	                                        "speed": 4,
	                                        "size_min": 0.4
	                                    }
	                                },
	                                "line_linked": {
	                                    "enable": false
	                                },
	                                "move": {
	                                    "random": true,
	                                    "speed": 1,
	                                    "direction": "top",
	                                    "out_mode": "out"
	                                }
	                            },
	                            "interactivity": {
	                                "events": {
	                                    "onhover": {
	                                        "enable": true,
	                                        "mode": "bubble"
	                                    },
	                                    "onclick": {
	                                        "enable": true,
	                                        "mode": "repulse"
	                                    }
	                                },
	                                "modes": {
	                                    "bubble": {
	                                        "distance": 250,
	                                        "duration": 2,
	                                        "size": 0,
	                                        "opacity": 0
	                                    },
	                                    "repulse": {
	                                        "distance": 400,
	                                        "duration": 4
	                                    }
	                                }
	                            }
	                        }} />    
                      {/* Background using Particles Simple*/}
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
            {/* Robot is here */}
                  <Robot/> 
			  </div>
            {/* Mouse Scroll Animation */}
              
				   <a href="#aboutMe" >
				   
                     <div className="mouse_scroll">
                       <div className="mouse button">
			             <div className="wheel"></div>
		              </div>
		                 <div>
			               <span className="m_scroll_arrows unu"></span>
			               <span className="m_scroll_arrows doi"></span>
			               <span className="m_scroll_arrows trei"></span>
		                 </div>
                      </div>
				   </a>
              </div>
       );
    }
 };
export default Background;