import React from 'react';
import '../styles/portfolio.scss';
//import {useSpring, animated} from 'react-spring';
//import ParallaxCard from 'react-parallax-card'
import myPicture from '../img/mypicture.jpeg';
import myPicture2 from '../img/burger.png';
import "react-responsive-modal/styles.css";
//import { Modal } from "react-responsive-modal";
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import Modal from 'react-modal';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


import SkyLight from 'react-skylight';




const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Portfolio extends React.Component {

  constructor(props){
    super(props);
  }

  state = {
    modalIsOpen: false,
    secondModalIsOpen: false
  };
  
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  
  openSecondModal = () => {
    this.setState({ secondModalIsOpen: true });
  };
  
  closeSecondModal = () => {
    this.setState({ secondModalIsOpen: false });
  };
  // state = {
  //   open: false
  // };

  //onOpenModal = () => {
  //   this.setState({ open: true });
  // };

  onCloseModal = () => {
  this.setState({ open: false });
   };
    render(){

      // const { open } = this.state;
      
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
      <img src={myPicture2}></img>
      <div className="caption">
        <h3 className="title">Beautiful Summer</h3>
      
        <div>
        {/* <button onClick={this.openModal}>Open Modal</button>
      

        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
        </Modal> */}
     
     <Popup trigger={<button className="button"> 222Open Modal </button>} modal>
 
 {close => (
 <span>
   <a className="close" onClick={close}>
 &times;
</a>
     <img src={myPicture2}></img>   
     Content here Content here22222222222
     222222222222Modal content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
           magni omnis delectus nemo, maxime molestiae dolorem numquam
           mollitia, voluptate ea, accusamus excepturi deleniti ratione
           sapiente! Laudantium, aperiam doloribus. Odit, aut.
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
     
     </span>
 
 )}

</Popup>

     

        
      </div>
        {/* <Modal id='modal1' open={open} onClose={this.onCloseModal}>
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
       
        </Modal> */}


        
        <a id='modal1'onClick={this.onOpenModal} className="button">Find Out </a>
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
          {/* <button onClick={this.openSecondModal}>Open Second Modal</button>
        <Modal
          isOpen={this.state.secondModalIsOpen}
          onRequestClose={this.closeSecondModal}
        >
          <button onClick={this.closeSecondModal}>close</button>
          <div>second modal</div>
        </Modal> */}

        <Popup trigger={<button className="button"> 222Open Modal </button>} modal>
 
    {close => (
    <span>
        <img src={myPicture}></img>   
        Content here Content here111111111111111111
        11111111112Modal content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
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
        <a className="close" onClick={close}>
          &times;
        </a>
        </span>
    
    )}
   
  </Popup>
  
        
  
        {/* <Modal id='modal2' open={open} onClose={this.onCloseModal}>
          <img src={myPicture}></img>
          <h2>Simple centered modal22222222222222222</h2>
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
       
        </Modal> */}
        <a id='modal2'onClick={this.onOpenModal} className="button">Find Out </a>
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

    