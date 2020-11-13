import React from 'react';
import {Form,Button} from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';

class Contact extends React.Component {
	render(){
        
        return (
<div id="contact" style={{backgroundColor: '#9bafaf', height: '100vh', padding:'10px'}}>


  
<ScrollAnimation animateIn='wobble'initiallyVisible={true}>
<h1>Drop Me a Line</h1><i class="fa fa-comments-o" aria-hidden="true" style={{fontSize:'30px' ,paddingRight:'10px' }}></i>
</ScrollAnimation>
<div className="row no-gutters" >
  <div className="col-md-2 mb-md-0 p-md-4"></div>
 
 
  <div className="col-md-5 p-4 pl-md-4 shadow-lg p-3 mb-5 bg-white rounded"  >
  
   <div >
     
   <ScrollAnimation animateIn='flipInY'animateOut='flipOutY'>
   <h1>Drop Me a Line</h1>
   </ScrollAnimation>
   <Form controlId="formBasicEmail" action="mailto:benbaba2525@gmail.com" method="post" enctype="text/plain">
   <Form.Group>
   <Form.Label>Your Name</Form.Label>
  <Form.Control type="text" name="Name : " placeholder="Your Name" />
  </Form.Group>
  <br />
   <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="Email Address : " placeholder="name@example.com" />
  </Form.Group>

  <br />

    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" name="Comment  " rows={3}  />
  </Form.Group>
<br />
  <Button variant="primary" type="submit" value = "send">
    Submit
  </Button>

  
</Form>
 </div>

  </div>


</div>
</div>






    




            );
        }
     };
    export default Contact;