import React from 'react';
import '../styles/portfolio.css';
import '../styles/portfolio.scss';
//import {useSpring, animated} from 'react-spring';
//import ParallaxCard from 'react-parallax-card'
import myPicture from '../img/mypicture.jpeg';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import ScrollUpButton from "react-scroll-up-button"; //Add this line Here

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Portfolio extends React.Component {
  
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
    render(){

      const { open } = this.state;
      
        return (

<div class="row" style={{backgroundColor: '#93bbbb'}}>


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
      
        <Modal open={open} onClose={this.onCloseModal}>
          <img src={myPicture}></img>
          <h2>Simple centered modal</h2>
          <hr></hr>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </h2>
          <div className="col-xs-6 social text-right">
                <a href="https://github.com/benbaba2525" target="_blank">
                <i class="fa fa-github-square" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/kanyarut-pornamnuay-b9a2501a1/" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
      
                <a href="https://www.facebook.com/ben.pornamnuay" target="_blank">
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                </a>

              </div>
       
        </Modal>
        <a onClick={this.onOpenModal} className="button">Find Out </a>
      </div>
    </div>
    <div className="middle"></div>
    <div className="bottom"></div>
    
  </div>
  
</div>

            <div>
                <ScrollUpButton />
                //This is all you need to get the default view working
            </div>

</div>

</div>
          


            );
        }
     };

    
export default Portfolio;

    