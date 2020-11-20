import React from "react";
import "../styles/background.scss";
import styled, { keyframes } from "styled-components";
import Swing from "@bit/formidablelabs.react-animations.swing";
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



const SwingAnimation = keyframes`${Swing}`;
const SwingDiv = styled.div`
  animation: infinite 5s ${SwingAnimation};
`;


class Skills extends React.Component {
	     render(){
        
          return (

              <div id="skills" style={{backgroundColor: "#8da5a5",width:100 +'%', padding:"10px",  zIndex:999}}>
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
                      <h1 style={{padding: "15px"}}><u>My Skills</u></h1>
                </Rosa>
                      
                <Rosa animation={'fade-left'}>
              	<div className="container">
              		<p style={{fontSize:"20px",textAlign:"left"}}>Full stack web developer with developed skills and experienced to design, build, and maintain websites and application 
              		from conception to production using HTML/HTML5,CSS/CSS3, Responsive Web Design, Bootstrap, Material-UI, REST, AJAX, APIs, 
              		JSON, ReactJS, JavaScript, jQuery, Node.js, Express.js, MySQL, MongoDB, Firebase, Git, Github, Wordpress.</p>
                </div>
        <div class="row" style={{marginTop:"5%"}}>
                  
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 ">
                <SwingDiv><img src={Html}></img><p><strong>HTML</strong></p></SwingDiv>
            </div> 

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <SwingDiv><img src={Css}></img><p><strong>CSS</strong></p></SwingDiv>
            </div>	  

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <SwingDiv><img src={Js}></img><p><strong>JS</strong></p></SwingDiv>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <SwingDiv><img src={Jquery}></img><p><strong>jQuery</strong></p></SwingDiv>
            </div>		             
              			  
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <SwingDiv><img src={Bootstrap}></img><p><strong>Bootstrap</strong></p></SwingDiv>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <SwingDiv><img src={Reactlogo}></img><p><strong>ReactJS</strong></p></SwingDiv>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <SwingDiv><img src={Material}></img><p><strong>Material Ui</strong></p></SwingDiv>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <SwingDiv><img src={Ajax}></img><p><strong>AJAX</strong></p></SwingDiv>
            </div>

          	<div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mt-4">
                <SwingDiv><img src={Api}></img><p><strong>API</strong></p></SwingDiv>
            </div>      

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mt-4">
                <SwingDiv><img src={Json}></img><p><strong>JSON</strong></p></SwingDiv>
            </div> 

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mt-4">
                <SwingDiv><img src={NodeJS}></img><p><strong>Node.js</strong></p></SwingDiv>
            </div> 

            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 mt-4">
                <SwingDiv><img src={MySQL}></img><p><strong>MySQL</strong></p></SwingDiv>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 mt-4">
                <SwingDiv><img src={MongoDB}></img><p><strong>MongoDB</strong></p></SwingDiv>
            </div>                     
                          
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 mt-4">
                <SwingDiv><img src={Firebase}></img><p><strong>Firebase</strong></p></SwingDiv>
            </div>  

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mt-4">
                <SwingDiv><img src={Git}></img><p><strong>Git</strong></p></SwingDiv>
            </div>  

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mt-4">
                <SwingDiv><img src={Github}></img><p><strong>Github</strong></p></SwingDiv>
            </div>                

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mt-4">
                <SwingDiv><img src={Wordpress}></img><p><strong>Wordpress</strong></p></SwingDiv>
            </div>                  
              
         </div>                  
        </Rosa>
      </div>
   </div>          
              			  
              

      );
    }
  };
export default Skills;