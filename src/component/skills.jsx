import React from "react";
import "../styles/background.scss";
import Rosa from "react-on-scroll-animation" 
import Html from "../img/html.png";
import Css from "../img/css3.png";
import Bootstrap from "../img/boostrap.png";
import Js from "../img/js.png";
import Jquery from "../img/jQuery.png";
import Reactlogo from "../img/react.png";
import Material from "../img/Material-UI.png";
import Ajax from "../img/ajax.png";
import Api from "../img/api.png";
import Json from "../img/json.png";
import NodeJS from "../img/nodejs.png";
import MySQL from "../img/mySQL.png";
import MongoDB from "../img/mongoDB.png";
import Firebase from "../img/firebase.png";
import Git from "../img/git.png";
import Github from "../img/github.png";
import Wordpress from "../img/wordpress.png";






class Skills extends React.Component {
	     render(){
        
          return (

              <div id="skills" style={{backgroundColor: "#333a3a",height:"100%", padding:"10px",  zIndex:999}}>
                 <div id="particle-container">
                    <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
	                  <div className ="particle"></div>
                <Rosa animation="zoom-in"   
                      duration={300}   
                      delay={300} >  
                      <h1 style={{padding: "15px",color:"whitesmoke"}}><u>My Skills</u></h1>
                </Rosa>
                      
                <Rosa animation={'fade-left'}>
              	<div className="container">
              		<p style={{fontSize:"20px",textAlign:"left"}}>Full stack web developer with developed skills and experienced to design, build, and maintain websites and application 
              		from conception to production using HTML/HTML5,CSS/CSS3, Responsive Web Design, Bootstrap, Material-UI, REST, AJAX, APIs, 
              		JSON, ReactJS, JavaScript, jQuery, Node.js, Express.js, MySQL, MongoDB, Firebase, Git, Github, Wordpress.</p>
             
        <div class="row ontainer" style={{marginTop:"5%"}}>
                  
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 mt-5">
            <img src={Html}></img><p><strong>HTML</strong></p>
            </div> 

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 mt-5">
            <img src={Css}></img><p><strong>CSS</strong></p>
            </div>	  

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 mt-5">
                <img src={Bootstrap}></img><p><strong>Bootstrap</strong></p>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 mt-5">
                <img src={Jquery}></img><p><strong>jQuery</strong></p>
            </div>		             
              			  
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mt-5">
                <img src={Js}></img><p><strong>JS</strong></p>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 mt-5">
                <img src={Reactlogo}></img><p><strong>ReactJS</strong></p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 mt-5">
                <img src={Material}></img><p><strong>Material Ui</strong></p>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 mt-5">
                <img src={Ajax}></img><p><strong>AJAX</strong></p>
            </div>

          	<div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 mt-5">
                <img src={Api}></img><p><strong>API</strong></p>
            </div>      

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 mt-5">
                <img src={Json}></img><p><strong>JSON</strong></p>
            </div> 

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 mt-5">
                <img src={NodeJS}></img><p><strong>Node.js</strong></p>
            </div> 

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 mt-5">
                <img src={MySQL}></img><p><strong>MySQL</strong></p>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 mt-5">
                <img src={MongoDB}></img><p><strong>MongoDB</strong></p>
            </div>                     
                          
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 mt-5">
                <img src={Firebase}></img><p><strong>Firebase</strong></p>
            </div>  

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 mt-5">
                <img src={Git}></img><p><strong>Git</strong></p>
            </div>  

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 mt-5">
                <img src={Github}></img><p><strong>Github</strong></p>
            </div>                

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 mt-5">
                <img src={Wordpress}></img><p><strong>Wordpress</strong></p>
            </div>                  
              
          </div> 
         </div>                 
       </Rosa>
      </div>
   </div>          
              			  
              

      );
    }
  };
export default Skills;