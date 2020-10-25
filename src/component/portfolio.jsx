import React from 'react';
//import ReactDOM from 'react-dom'
import '../styles/portfolio.css';
//import {useSpring, animated} from 'react-spring';
import ParallaxCard from 'react-parallax-card'
import myPicture from '../img/mypicture.jpeg';


class Portfolio extends React.Component {
    
    render(){
      
        return (

<div class="row">


<div className="col-lg-4 col-md-6 mt-4">

<div className="fancy-cards">
  <h1>Microinteraction on active</h1>
  <p>It triggers a subtle micro-interaction (scales and adjusts) when the user interacts with it.</p>
  <div className="fancy-card">
    <div className="top">
      <img src={myPicture}></img>
      <div className="caption">
        <h3 className="title">Beautiful Summer</h3>
        <a href="" className="button">Find Out </a>
      </div>
    </div>
    <div className="middle"></div>
    <div className="bottom"></div>
  </div>
</div>

</div>
<div className="col-lg-4 col-md-6 mt-4">

<div className="fancy-cards">
  <h1>Microinteraction on active</h1>
  <p>It triggers a subtle micro-interaction (scales and adjusts) when the user interacts with it.</p>
  <div className="fancy-card">
    <div className="top">
      <img src={myPicture}></img>
      <div className="caption">
        <h3 className="title">Beautiful Summer</h3>
        <a href="" className="button">Find Out </a>
      </div>
    </div>
    <div className="middle"></div>
    <div className="bottom"></div>
  </div>
</div>





</div>
</div>
          


            );
        }
     };
export default Portfolio;

    