import React from 'react';
//import ReactDOM from 'react-dom'
import '../styles/portfolio.css';
//import {useSpring, animated} from 'react-spring';
//import ParallaxCard from 'react-parallax-card'
import myPicture from '../img/mypicture.jpeg';
//import Modal from 'react-modal';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Button from "react-bootstrap/Button"

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
        <Button onClick={this.onOpenModal}>Open modal</Button>
        <Modal open={open} onClose={this.onCloseModal}>
          <img src={myPicture}></img>
          <h2>Simple centered modal</h2>
          <hr></hr>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </h2>
        </Modal>
        <a href="" className="button">Find Out </a>
      </div>
    </div>
    <div className="middle"></div>
    <div className="bottom"></div>
    

  </div>
  
</div>

{/* <div style={styles}>
        <h2>react-responsive-modal</h2>
        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal}>
          <h2>Simple centered modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
      </div> */}

  




</div>
</div>
          


            );
        }
     };

    
export default Portfolio;

    