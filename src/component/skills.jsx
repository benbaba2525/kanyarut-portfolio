import React from 'react';
import styled, { keyframes } from "styled-components";
import Swing from "@bit/formidablelabs.react-animations.swing";
import ScrollAnimation from 'react-animate-on-scroll';
import Html from '../img/html.png'
import Css from '../img/css3.png'
import Js from '../img/js.png'



const SwingAnimation = keyframes`${Swing}`;
const SwingDiv = styled.div`
  animation: infinite 5s ${SwingAnimation};
`;


class Skills extends React.Component {
	render(){
        
        return (

        <div id="skills" style={{backgroundColor: '#9bafaf', height: '100vh', padding:'10px'}}>
      
        
              <ScrollAnimation animateIn='wobble'initiallyVisible={true} >
              <h1 style={{padding: '15px'}}>My Skills</h1>
              </ScrollAnimation>


         
<ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
              <div class="row" style={{marginTop:'5%'}}>
           
              <div className="col-lg-3 col-md-6">
              <SwingDiv>
              <img src={Html}></img>
              </SwingDiv>
              </div>

              <div className="col-lg-3 col-md-6">
              <SwingDiv>
              <img src={Css}></img>
              </SwingDiv>
              </div>

              <div className="col-lg-3 col-md-6">
              <SwingDiv>
              <img src={Js}></img>
              </SwingDiv>
              </div>

              <div className="col-lg-3 col-md-6">
              <SwingDiv>
              <img src={Js}></img>
              </SwingDiv>
              </div>

            


          </div>
          </ScrollAnimation>
          </div>




            );
        }
     };
    export default Skills;