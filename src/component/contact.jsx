import React from "react";
import {Form} from "react-bootstrap";
import emailjs from 'emailjs-com';
import Rosa from "react-on-scroll-animation" ;
import Iframe from "react-iframe";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "react-awesome-button/dist/themes/theme-c137.css";




class Contact extends React.Component {
	render(){

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_x1ur0i2', 'template_fdw2yuz', e.target, 'user_VwHOCy877hqVKMEpFkYCz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
        
        return (
              <div id="contact" style={{backgroundColor: "#9bafaf", height: "100%", padding:"10px"}}>
                 <div id="particle-container">
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
  
                        <Rosa animation="zoom-in"   
                              duration={100}   
                              delay={300} >  
                        <h1><u>Contact</u></h1>
                       </Rosa>

             <Rosa animation="zoom-in"   
                   duration={300}   
                   delay={400} >  
                 <div className="row no-gutters" >
                   <div className="col-md-2 mb-md-0 p-md-4"></div>
                     <div className="col-md-5 col-sm-6 col-xs-6 p-4 pl-md-4 shadow-lg p-3 mb-5 mt-4 bg-dark rounded">
                       <h5 style={{padding:"12px", textAlign:"center",color:"whitesmoke"}}><i class="fa fa-comments-o" aria-hidden="true" style={{fontSize:"30px" ,paddingRight:"10px"}}></i>Drop Me a Line</h5>
                       {/* Contact Form */}
                      <Form onSubmit = {sendEmail} >
                           <Form.Group>
                              <Form.Control type="text" name="name" placeholder="Your Name" />
                           </Form.Group>
                      <br/>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" name="email" placeholder="name@example.com" />
                          </Form.Group>
                      <br/>
                          <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" name="message" placeholder="Your Message" rows={3}  />
                          </Form.Group>
                      <br/>
                       {/* Submit Button */}
                         <AwesomeButton size="medium" type="secondary">Submit</AwesomeButton>
                      </Form>
                    </div>

                 <div className="col-md-3 col-sm-6 col-xs-6 p-4 pl-md-4 shadow-lg p-3 mb-5 mt-4 bg-dark rounded">
                   <h5 style={{padding:"12px", textAlign:'center', color:'whitesmoke'}}><i class="fa fa-map-marker" aria-hidden="true" style={{fontSize:"30px" ,paddingRight:"10px"}}></i>I'm Here</h5>
                   <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1651.9985158261982!2d-118.30159222858586!3d34.09521649515845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf554f29cfb3%3A0x44aa08da55395c45!2sNormandie%20%2F%20Fountain!5e0!3m2!1sen!2sus!4v1605249441898!5m2!1sen!2sus"  width="100%" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" />
                 </div>
                  <div className="col-md-2 mb-md-0 p-md-4"></div>
                 </div>
              </Rosa>
            </div>
        </div>
      
       );
  
    }

};
export default Contact;