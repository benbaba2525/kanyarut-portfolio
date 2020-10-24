import React from 'react';
import myPicture from '../img/mypicture.jpeg';
import'../styles/about.css';
import WOW from "wowjs";
//import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel'



class About extends React.Component {
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
      }
	render(){
        const styles= 
        {
          wrapper:{
           marginTop: "340px",
           marginBottom: "100px"
          },
          img:{
            borderRadius: 50 + "%",
			     height: 300 + "px",
			     width: 300 + "px"
          },
          
        };
        return (
        

<div id="wrapper" style={styles.wrapper}>


<Carousel>
<Carousel.Item>
  <div className="row no-gutters" id="aboutMe" style={{backgroundColor:'#e0ebeb'}}>
  <div className="col-md-2 mb-md-0 p-md-4"></div>
 
  <div className="col-md-3 p-4 pl-md-4 shadow-lg p-3 mb-5 mt-5 bg-white rounded" >
  
   <div className="wow bounceIn">
      
   <h1>About Me</h1>
</div>
    <img
			className={"img-fluid " + this.props.fadeIn}
			src={myPicture}
			alt="my picture"
			style={styles.img}
	/>
        </div>
    <div className="col-md-5 p-4 pl-md-4 shadow-lg p-3 mb-5 mt-5 bg-white rounded">
    <h5 className="text-dark" ><h2>I'm</h2> <strong> Kanyarut Pornamnuay</strong></h5>
    <p className="text-dark">
  I graduated with a master degree in computer science, and also joined the database management program and received a certificate from UCLA Extension. 
</p>

<p className="text-dark">
Moreover, I just graduated with a certificate program in full stack development from University of California, 
Los Angeles coding bootcamp, with developed skills, I learn how to create websites and application
using HTML/HTML5,CSS, Responsive web design, Bootstrap, Material-UI, ReactJS, JavaScript, jQuery, JSON, AJAX, APIs, NodeJS, ExpressJS,
MySQL, MongoDB, Firebase and Github.
  
</p>

<p className="text-dark">
Known as an innovative problem solver passionate about developing apps, 
with a focus on developing websites and applications. With a group projects,
I have worked on a team to contributed to design and development of client and server database applications.
Also, Maintain websites and applications, including content updates, debugging, testing
and regular upgrades to ensure web and system usability. I’m excited to leverage my skills as part of a fast-paced, 
quality-driven team to build better experiences on the web. 
</p>


     </div>
     </div>
      
     <div className="col-md-2 mb-md-0 p-md-4"></div>
     </Carousel.Item>
     <Carousel.Item>Hello</Carousel.Item>
     </Carousel>
 
    </div>
    

    
    
            );
        }
     };
    export default About;