import React from 'react';
import myPicture from '../img/mypicture.jpeg';
import WOW from "wowjs";
//import Card from 'react-bootstrap/Card';


class About extends React.Component {
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
      }
	render(){
        const styles= 
        {
          wrapper:{
           marginTop: '320px',
          },
          img:{
            borderRadius: 50 + "%",
			height: 300 + "px",
			width: 300 + "px"
          }
        };
        return (
        

<div style={styles.wrapper}>

      
  <div class="row no-gutters bg-light" style={{backgroundColor:'green'}}>
  <div class="col-md-5 mb-md-0 p-md-4">
  
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
    <div class="col-md-7 position-static p-4 pl-md-4">
    <h5 class="text-dark" ><h2>I'm</h2> <strong> Kanyarut Pornamnuay</strong></h5>
    <h5>
  I graduated with a master degree in computer science, and also joined the database management program and received a certificate from UCLA Extension. 
</h5>

<p>
Moreover, I just graduated with a certificate program in full stack development from University of California, 
Los Angeles coding bootcamp, with developed skills, I learn how to create websites and application
using HTML/HTML5,CSS, Responsive web design, Bootstrap, Material-UI, ReactJS, JavaScript, jQuery, JSON, AJAX, APIs, NodeJS, ExpressJS,
MySQL, MongoDB, Firebase and Github.
  
</p>

<p>
Known as an innovative problem solver passionate about developing apps, 
with a focus on developing websites and applications. With a group projects,
I have worked on a team to contributed to design and development of client and server database applications.
Also, Maintain websites and applications, including content updates, debugging, testing
and regular upgrades to ensure web and system usability. I’m excited to leverage my skills as part of a fast-paced, 
quality-driven team to build better experiences on the web. 
</p>


     </div>


     
    </div>




</div>


    
            );
        }
     };
    export default About;