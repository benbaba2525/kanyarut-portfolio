import React from 'react';
import styled, { keyframes } from "styled-components";
import Swing from "@bit/formidablelabs.react-animations.swing";
import ScrollAnimation from 'react-animate-on-scroll';
import Particles from 'react-particles-js';
import Html from '../img/html.png'
import Css from '../img/css3.png'
import Bootstrap from '../img/boostrap.png'
import Js from '../img/js.png'
import Jquery from '../img/jQuery.png'




const SwingAnimation = keyframes`${Swing}`;
const SwingDiv = styled.div`
  animation: infinite 5s ${SwingAnimation};
`;


class Skills extends React.Component {
	render(){
        
        return (

        <div id="skills" style={{backgroundColor: '#809797', height: '100vh', padding:'10px'}}>
      
        
              <ScrollAnimation animateIn='wobble'initiallyVisible={true} >
              <h1 style={{padding: '15px'}}>My Skills</h1>
              </ScrollAnimation>


         
<ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
              <div class="row" style={{marginTop:'5%'}}>
                  
           
              <div className="col-lg-3 col-md-6">
              <SwingDiv>
              <img src={Html}></img>
			  <p><strong>HTML</strong></p>
              </SwingDiv>
              </div>

              <div className="col-lg-3 col-md-6">
              <SwingDiv>
              <img src={Css}></img>
			  <p><strong>CSS</strong></p>
              </SwingDiv>
              </div>

              <div className="col-lg-3 col-md-6">
              <SwingDiv>
              <img src={Js}></img>
			  <p><strong>JS</strong></p>
              </SwingDiv>
              </div>

			  <div className="col-lg-3 col-md-6">
              <SwingDiv>
              <img src={Jquery}></img>
			  <p><strong>jQuery</strong></p>
              </SwingDiv>
              </div>

              <div className="col-lg-4 col-md-6 mt-4">
              <SwingDiv>
              <img src={Bootstrap}></img>
			  <p><strong>Bootstrap</strong></p>
              </SwingDiv>
              </div>
			  <div className="col-lg-4 col-md-6 mt-4">
              <SwingDiv>
              <img src={Js}></img>
			  <p><strong>Bootstrap</strong></p>
              </SwingDiv>
              </div>

			  <div className="col-lg-4 col-md-6 mt-4">
              <SwingDiv>
              <img src={Js}></img>
              </SwingDiv>
              </div>


			  


          </div>
          </ScrollAnimation>
		  
          <Particles 
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
          </div>




            );
        }
     };
    export default Skills;