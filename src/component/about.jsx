import React from "react";
import "../styles/about.scss";
import myResume from "../img/Resume.pdf";
import myPicture from "../img/mypicture.jpeg";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import "animate.css/animate.min.css";
import Rosa from "react-on-scroll-animation" 


class About extends React.Component {
	render(){
        const styles= 
        {
          img:{
           borderRadius: 50 + "%",
			     height: 300 + "px",
			     width: 300 + "px"
          },
          
        };
        return (
               <div id="wrapper" style={styles.wrapper}>
                 <div className="row no-gutters" id="aboutMe" >
                   <div className="col-md-2 mb-md-0 p-md-4"></div>
                     <div className="leftBg col-md-3 p-4 pl-md-4 shadow-lg p-3 mb-5 bg-white rounded" >
                       <div>
                       <Rosa animation="zoom-in"   
                             duration={100}   
                             delay={300} >  
                             <h1>About Me</h1>
                      </Rosa>
                       </div>
                       <Rosa animation={'fade-up-right'}>
                              <img
			                          className={"img-fluid " + this.props.fadeIn}
			                          src={myPicture}
			                          alt="my picture"
			                          style={styles.img}
	                          />
                            {/* Link to my social */}
                               <div className="col-xs-6 social1 text-center">
                                  <a href="https://github.com/benbaba2525" target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a>
                                  <a href="https://www.linkedin.com/in/kanyarut-pornamnuay-b9a2501a1/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                  <a href="https://www.facebook.com/ben.pornamnuay" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                                  <a href="https://www.instagram.com/benbaba2525/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                               </div>
                            </Rosa>
                       </div>

                    <div className="rightBg col-md-5 p-4 pl-md-4 shadow-lg p-3 mb-5  bg-white rounded">
                    
                        <h5 className="text-dark"><h2>I'm</h2> <strong> Kanyarut Pornamnuay</strong></h5>
                          <p className="text-dark" style={{textAlign:"left"}}>
                          I graduated with a master degree in computer science, and also joined the database management program and received a certificate from UCLA Extension. 
                          </p>
                          <p className="text-dark" style={{textAlign:"left"}}>
                          Moreover, I just graduated with a certificate program in full stack development from University of California, 
                          Los Angeles coding bootcamp, with developed skills, I learn how to create websites and application
                          using HTML/HTML5,CSS, Responsive web design, Bootstrap, Material-UI, ReactJS, JavaScript, jQuery, JSON, AJAX, APIs, NodeJS, ExpressJS,
                          MySQL, MongoDB, Firebase, Git, Github and Wordpress.
                          </p>

                         <p className="text-dark" style={{textAlign:"left"}}>
                          Known as an innovative problem solver passionate about developing apps, 
                          with a focus on developing websites and applications. With a group projects,
                          I have worked on a team to contributed to design and development of client and server database applications.
                          Also, Maintain websites and applications, including content updates, debugging, testing
                          and regular upgrades to ensure web and system usability. I’m excited to leverage my skills as part of a fast-paced, 
                          quality-driven team to build better experiences on the web. 
                         </p>
                          <br></br>
                          {/* Button to download my resume */}
                             <div>
                             <AwesomeButton type="secondary" style={{textAlign:"center"}}><a target="_blank"  href = {myResume} style={{color:"white"}} download="Resume 2020 .pdf">My Resume</a></AwesomeButton>
                             </div>
                  
                    </div>
                 </div>
              <div className="col-md-2 mb-md-0 p-md-4"></div>
          </div>
    
          );
        }
      };
export default About;