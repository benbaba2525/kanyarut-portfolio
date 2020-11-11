import React from 'react';
import '../styles/portfolio.scss';


import DateNightPlanner from '../img/dateNightPlanner.png'
import Quarantine from '../img/quarantine-coffee.png';

import ScrollUpButton from "react-scroll-up-button"; 
import ScrollAnimation from 'react-animate-on-scroll';


import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import PopDatenightPlanner from '../img/PopDatenightPlanner.png';
import PopQuarantine from '../img/PopQuarantine.png';



import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/themes/theme-c137.css';


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
                     <a className="close" onClick={close}> &times; </a>
                      <a target="_blank" rel="nofollow" href="https://benbaba2525.github.io/Project1-Date-Night-Planer/">
                       <img src={PopDatenightPlanner} style={{width: '100%'}}></img>   
                      </a>
                       <br></br>
                        <h5 style={{padding: '5px'}}>Date Night Planer</h5> 
                         <p style={{color: '#111111', fontSize:'20px'}}>
                          is providing user to plan their date night at home
                          by check on where to order food and search for movies to watch.
                        </p>
                        <hr></hr>
                          <AwesomeButton size="small" type="primary">HTML</AwesomeButton>
                          <AwesomeButton size="small" type="primary">CSS</AwesomeButton>
                          <AwesomeButton size="small" type="primary">Bootstrap</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">JavaScript</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">jQuery</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">AJAX</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">APIs</AwesomeButton>

                       <div className="col-xs-6 social text-right">
                         <a href="https://github.com/benbaba2525/Project1-Date-Night-Planer" target="_blank"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                         <a href="https://benbaba2525.github.io/Project1-Date-Night-Planer/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
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
      <img src={Quarantine}></img>
       <div className="caption">
        <h3 className="title">Quarantine Coffee</h3>
         <div>
           <Popup trigger={<button className="button"> View Project </button>} modal>
              {close => (
                   <span>
                     <a className="close" onClick={close}> &times; </a>
                      <a target="_blank" rel="nofollow" href="quarantine-coffee-life.herokuapp.com/">
                       <img src={PopQuarantine} style={{width: '100%'}}></img>   
                      </a>
                       <br></br>
                        <h5 style={{padding: '5px'}}>Quarantine Coffee</h5> 
                         <p style={{color: '#111111', fontSize:'20px'}}>
                         A new platform for a Virtual Coffee Shop! that you can just grab your own coffee and chat, read
                         and connect, all without stepping outside your door.
                        </p>
                        <hr></hr>
                          <AwesomeButton size="small" type="primary">HTML</AwesomeButton>
                          <AwesomeButton size="small" type="primary">CSS</AwesomeButton>
                          <AwesomeButton size="small" type="primary">Bootstrap</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">JavaScript</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Handlebars</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Node.js</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Express.js</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Socket.io</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">MySQL</AwesomeButton>

                       <div className="col-xs-6 social text-right">
                         <a href="https://github.com/QuarantineNightOwls/Quarantine-Coffee" target="_blank"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                         <a href="quarantine-coffee-life.herokuapp.com/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
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

    