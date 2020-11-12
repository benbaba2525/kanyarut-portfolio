import React from 'react';
import {Form,Col} from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';

class Contact extends React.Component {
	render(){
        
        return (
<div id="contact" style={{backgroundColor: '#c6dddd', height: '100vh', padding:'10px'}}>
<ScrollAnimation animateIn='wobble'initiallyVisible={true}>
<h1>Drop Me a Line</h1>
</ScrollAnimation>



<div className="col-md-2 mb-md-0 p-md-4"></div>
 
  <div className="col-md-5 p-4 pl-md-4 shadow-lg p-3 mb-5 bg-white rounded" style={{marginTop: '10%', marginBottom: '10%'}} >
  
   <div >
   <ScrollAnimation animateIn='flipInY'animateOut='flipOutY'>
   <h1>Drop Me a Line</h1>
   </ScrollAnimation>
   <Form.Group>
  <Form.Row>
    <Form.Label column="lg" lg={2}>
      Large Text
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="text" placeholder="Large text" />
    </Col>
  </Form.Row>
  <br />
  <Form.Row>
    <Form.Label column lg={2}>
      Normal Text
    </Form.Label>
    <Col>
      <Form.Control type="text" placeholder="Normal text" />
    </Col>
  </Form.Row>
  <br />
  <Form.Row>
    <Form.Label column="sm" lg={2}>
      Small Text
    </Form.Label>
    <Col>
      <Form.Control size="sm" type="text" placeholder="Small text" />
    </Col>
  </Form.Row>
</Form.Group>
 </div>

  </div>





</div>


    




            );
        }
     };
    export default Contact;