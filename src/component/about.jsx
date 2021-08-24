import React from "react";
import "../styles/about.scss";
import myResume from "../img/Resume IT_Web.pdf";
import myPicture from "../img/mypicture.jpeg";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import "animate.css/animate.min.css";
import Rosa from "react-on-scroll-animation" ;


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
                    
                        <h5 className="text-dark"><h2>I'm</h2> <strong> Kanyarat Paulamnuay</strong></h5>
                          <p className="text-dark" style={{textAlign:"left"}}>
                          Technical Support Specialist and Web Developer with a background in Computer Science, Database Management Certificate Program, and Full Stack Development in Coding Bootcamp. 
                          </p>
                          <p className="text-dark" style={{textAlign:"left"}}>
                          Many years of experience in IT support is wide and varied, including maintaining, troubleshooting, installing, and configuring computer hardware, software, system, networks.
                          Moreover, I recently developed and gained skills and experience by completing the certificate program in full stack development coding bootcamp to design, build, and maintain websites and application from conception to production 
                          using HTML/HTML5, CSS/CSS3, Responsive Web Design, Bootstrap, Material-UI, REST APIs, AJAX, JSON, ReactJS, JavaScript, jQuery, Node.js, Express.js, MySQL, MongoDB, Firebase, Git, Github, Wordpress, and Adobe.
                          </p>

                         <p className="text-dark" style={{textAlign:"left"}}>
                         Known as an innovative problem solver passionate about developing apps, with a focus on developing websites and applications. With group projects, I have worked on a team to contribute to design and development of client and website and applications.
                         Also, Maintain websites and applications, including content updates, debugging, testing and regular upgrades to ensure web and system usability.
                         I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.

                         </p>
                          <br></br>
                          {/* Button to download my resume */}
                             <div>
                             <AwesomeButton type="secondary" style={{textAlign:"center"}}><a target="_blank"  href = {myResume} style={{color:"white"}} download="Resume.pdf">My Resume</a></AwesomeButton>
                             </div>
                  
                    </div>
                 </div>
              <div className="col-md-2 mb-md-0 p-md-4"></div>
          </div>
    
          );
        }
      };
export default About;