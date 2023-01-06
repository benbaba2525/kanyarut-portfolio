import React from "react";
import itPicture from "../img/IT.png";
import "../styles/background.scss";
import Rosa from "react-on-scroll-animation";


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
                 <h1 style={{padding: "15px",color:"whitesmoke"}}><u>Skills</u></h1>
           </Rosa>
                 
           <Rosa animation={'fade-left'}>
       
             <div className="row no-gutters" id="aboutMe" >
             <div className="col-md-5 p-4 pl-md-4 shadow-lg p-3 mb-5">
             <img                
                                className= "itpicture"
                                 src={itPicture}
                                 alt="my picture"
               />
             </div>

             <div className="col-md-7 p-4 pl-md-4 shadow-lg p-3 mb-5">
             <ul>
             <li style={{fontSize:"15px", textAlign:"left", marginLeft:"5px",padding: "5px",color: "white"}}>Help desk and Customer service skills.</li>
              <li style={{fontSize:"15px", textAlign:"left", marginLeft:"5px",padding: "5px",color: "white"}}>Excellent skills in IT supports ticketing systems. </li>
              <li style={{fontSize:"15px", textAlign:"left", marginLeft:"5px",padding: "5px",color: "white"}}>Operating systems : Window XP, 7, 8, 10, Mac OS and Linux (Ubuntu). </li>
              <li style={{fontSize:"15px", textAlign:"left", marginLeft:"5px",padding: "5px",color: "white"}}>Strong skills in troubleshooting the following:Windows 7/10, Microsoft Office Suite, MacOS, iOS, Internet applications, third party applications. </li>
              <li style={{fontSize:"15px", textAlign:"left", marginLeft:"5px",padding: "5px",color: "white"}}>Microsoft Suite (Power Point, Word, Excel).</li> 
              <li style={{fontSize:"15px", textAlign:"left", marginLeft:"5px",padding: "5px",color: "white"}}>Knowledge in TCP/IP networking and routing protocols also understanding of LAN and WAN management and maintenance protocols. </li>
              <li style={{fontSize:"15px", textAlign:"left", marginLeft:"5px",padding: "5px",color: "white"}}>Excellent skills in installing, maintaining, troubleshooting, and integrating hardware, software, and network devices. </li> 
              <li style={{fontSize:"15px", textAlign:"left", marginLeft:"5px",padding: "5px",color: "white"}}>Profound understanding of LAN and WAN management and maintenance protocols.</li> 
              <li style={{fontSize:"15px", textAlign:"left", marginLeft:"5px",padding: "5px",color: "white"}}>Database management, RDBMS.</li>
              <li style={{fontSize:"15px", textAlign:"left", marginLeft:"5px",padding: "5px",color: "white"}}>HTML, CSS, JavaScript, SQL</li>
             </ul>
             </div>
  
             
       
         
      </div>
                 
  </Rosa>
 </div>
</div>          
                       
         

 );
}
};
export default Skills;