import React from 'react';
//import ReactDOM from 'react-dom'
//import '../styles/portfolio.css';
//import {useSpring, animated} from 'react-spring';
import ParallaxCard from 'react-parallax-card'
import myPicture from '../img/mypicture.jpeg';


class Portfolio extends React.Component {
    
    render(){
      
        return (
            <ParallaxCard
  label='Label (optional)'
  enableRotate
  enableTransform
  style={{ margin: '0 auto', width: 320, height: 320 }}>

  <img src={myPicture} style={{ maxWidth: '100%', maxHeight: '100%' }} />

  <div /><div /><div />

  <i class="fa fa-github" aria-hidden="true"></i>

  {/* <p style={{ fontSize: '3px', fontWeight: 'bold', padding: '3px' }}>
    Javascript!
  </p> */}
   <img src='astronaut.png' style={{ top: '67%', left: '75%' }} />
   
</ParallaxCard>
            );
        }
     };
export default Portfolio;

    