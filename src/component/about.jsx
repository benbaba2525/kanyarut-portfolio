import React from "react";
import "../styles/about.scss";
import myResume from "../img/Resume_IT.pdf";
import myPicture from "../img/mypicture.jpeg";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import "animate.css/animate.min.css";
import Rosa from "react-on-scroll-animation";
import "react-on-scroll-animation/build/index.css";


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
                     <div className="leftBg col-md-3 p-4 pl-md-4 shadow-lg p-3 mb-2 bg-white rounded" >
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
                                  <a href="https://www.facebook.com/ben.pornamnuay" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                                  <a href="https://www.instagram.com/benbaba2525/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                               </div>
                            </Rosa>
                       </div>

                    <div className="rightBg col-md-5 p-4 pl-md-4 shadow-lg p-3 mb-2 bg-white rounded">
                    
                        <h5 className="text-dark"><h2>I'm</h2> <strong> Kanyarat Ben Paulamnuay</strong></h5>
                          <p className="text-dark mt-5" style={{textAlign:"left"}}>
                          Technical Support Specialist with a background in Computer Science, Database Management Certificate Program and Full Stack Development in Coding Bootcamp.
                          </p>
                          <p className="text-dark" style={{textAlign:"left"}}>
                          Over the past 8 years experience in IT support is wide and varied, including maintaining, troubleshooting, installing and configuring computer hardware, 
                          software, system, networks, printer and scanners. I have also provided IT help desk support and have developed excellent interpersonal skills as a result.
                          </p>

                         <p className="text-dark" style={{textAlign:"left"}}>
                         Known as an innovative problem solver passionate about IT professional, with a focus on IT support for long-term professional growth and development.
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