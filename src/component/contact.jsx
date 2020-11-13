import React from 'react';
import {Form,Button} from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';
import Iframe from 'react-iframe'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import 'react-awesome-button/dist/themes/theme-c137.css';



class Contact extends React.Component {
	render(){
        
        return (
<div id="contact" style={{backgroundColor: '#9bafaf', height: '100vh', padding:'10px'}}>


  
<ScrollAnimation animateIn='wobble'initiallyVisible={true} >
<h1>Contact</h1>
</ScrollAnimation>
<ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
<div className="row no-gutters" >
  <div className="col-md-1 mb-md-0 p-md-4"></div>
 
 
  <div className="col-md-6 p-4 pl-md-4 shadow-lg p-3 mb-5 mt-4 bg-dark rounded">
   <ScrollAnimation animateIn='flipInY'animateOut='flipOutY' style={{textAlign:'center',color:'whitesmoke'}}>
   <h5 style={{padding:'8px'}}><i class="fa fa-comments-o" aria-hidden="true" style={{fontSize:'30px' ,paddingRight:'10px'}}></i>Drop Me a Line</h5>
   </ScrollAnimation>
   <Form controlId="formBasicEmail" action="mailto:benbaba2525@gmail.com" method="post" enctype="text/plain">
   <Form.Group>
   {/* <Form.Label style={{color:'whitesmoke'}}>Your Name</Form.Label> */}
  <Form.Control type="text" name="Name : " placeholder="Your Name" />
  </Form.Group>
  <br />
   <Form.Group controlId="exampleForm.ControlInput1">
    {/* <Form.Label style={{color:'whitesmoke'}}>Email address</Form.Label> */}
    <Form.Control type="email" name="Email Address : " placeholder="name@example.com" />
  </Form.Group>

  <br />

    <Form.Group controlId="exampleForm.ControlTextarea1">
    {/* <Form.Label style={{color:'whitesmoke'}}>Message</Form.Label> */}
    <Form.Control as="textarea" name="Comment  " placeholder="Your Message" rows={3}  />
  </Form.Group>
<br />
  <AwesomeButton size="medium" type="secondary">Submit</AwesomeButton>
</Form>
 </div>

 <div className="col-md-4 p-4 pl-md-4 shadow-lg p-3 mb-5 mt-4 bg-dark rounded">

 <ScrollAnimation animateIn='flipInY'animateOut='flipOutY' style={{textAlign:'center',color:'whitesmoke'}}>
   <h5 style={{padding:'8px'}}><i class="fa fa-map-marker" aria-hidden="true" style={{fontSize:'30px' ,paddingRight:'10px'}}></i>I'm Here</h5>
   </ScrollAnimation>

 <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1651.9985158261982!2d-118.30159222858586!3d34.09521649515845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf554f29cfb3%3A0x44aa08da55395c45!2sNormandie%20%2F%20Fountain!5e0!3m2!1sen!2sus!4v1605249441898!5m2!1sen!2sus"  width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" />
  </div>

  <div className="col-md-1 mb-md-0 p-md-4"></div>
  </div>



</ScrollAnimation>
</div>






    




            );
        }
     };
    export default Contact;