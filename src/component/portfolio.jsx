import React from 'react';
import '../styles/portfolio.scss';
//import {useSpring, animated} from 'react-spring';
//import ParallaxCard from 'react-parallax-card'
import myPicture from '../img/mypicture.jpeg';
import P1 from '../img/p1.png';
//import Burger from '../img/burger.png';
import DateNightPlanner from '../img/dateNightPlanner.png'
//import "react-responsive-modal/styles.css";
//import { Modal } from "react-responsive-modal";
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

//import Modal from 'react-modal';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AwesomeButton } from "react-awesome-button";
//import "react-awesome-button/dist/styles.css";
import 'react-awesome-button/dist/themes/theme-c137.css';

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };

class Portfolio extends React.Component {

    render(){

      
        return (

<div id="porfolioWrapper" style={{backgroundColor: '#c6dddd', height: '100vh', padding:'10px'}}>
<ScrollAnimation animateIn='wobble'initiallyVisible={true}>
<h1>Portfolio</h1>
</ScrollAnimation>

<ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
<div class="row" style={{backgroundColor: '#c6dddd', margitTop:'10%'}}>


<div className="col-lg-4 col-md-6 mt-4">
<div className="fancy-cards">
  <div className="fancy-card">
    <div className="top">
      <img src={DateNightPlanner}></img>
      <div className="caption">
        <h3 className="title">Date Night Planner</h3>
      
        <div>
     
     <Popup trigger={<button className="button"> View Project </button>} modal>
 
 {close => (
 <span>
   <a className="close" onClick={close}>
 &times;
</a>

<a target="_blank" rel="nofollow" href="https://benbaba2525.github.io/Project1-Date-Night-Planer/">
     <img src={P1} style={{width: '100%'}}></img>   
</a>

<br></br>
<h5>Date Night Planer</h5> 
<p style={{color: '#111111'}}> is providing user to plan their date night at home
by check on where to order food and search for movies to watch.</p>


<AwesomeButton size="small" type="primary">HTML</AwesomeButton>
<AwesomeButton size="small" type="primary">CSS</AwesomeButton>
<AwesomeButton size="small" type="primary">Bootstrap</AwesomeButton>
<AwesomeButton size="medium" type="primary">GoogleFonts</AwesomeButton>

           <div className="col-xs-6 social text-right">
                <a href="https://github.com/benbaba2525" target="_blank">
                <i class="fa fa-github-square" aria-hidden="true"></i>
                </a>
                
                <a href="https://benbaba2525.github.io/Project1-Date-Night-Planer/" target="_blank">
                <i class="fa fa-link" aria-hidden="true"></i>
                </a>

             
             </div>    
     
     </span>
 
 )}

         </Popup>
      </div>
      </div>
      </div>
     <div className="middle"></div>
    <div className="bottom"></div>
  </div>
</div>
</div>


<div className="col-lg-4 col-md-6 mt-4">
<div className="fancy-cards">
  <div className="fancy-card">
    <div className="top">
      <img src={myPicture}></img>
      <div className="caption">
        <h3 className="title">Beautiful Summer</h3>
        <Popup trigger={<button className="button"> 222Open Modal </button>} modal>
 
    {close => (
    <span>
      <a className="close" onClick={close}>
          &times;
        </a>
        <img src={myPicture}></img>   
        Content here Content here111111111111111111
        11111111112Modal content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
              <div className="col-xs-6 social text-center">
                <a href="https://github.com/benbaba2525" target="_blank">
                <i class="fa fa-github-square" aria-hidden="true"></i>
                </a>
                
                <a href="https://benbaba2525.github.io/Project1-Date-Night-Planer/" target="_blank">
                <i class="fa fa-external-link" aria-hidden="true"></i>
                </a>
             </div>    
        
        </span>
    
    )}
   
  </Popup>
      </div>
    </div>
    <div className="middle"></div>
    <div className="bottom"></div>
    
  </div>
  
</div>
</div>




  







          
{/* ---------- */}
</div>
</ScrollAnimation>
<div>
<ScrollUpButton />
</div>
</div>
            );
        }
     };

    
export default Portfolio;

    