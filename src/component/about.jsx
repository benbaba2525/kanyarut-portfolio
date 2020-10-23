import React from 'react';
import myPicture from '../img/mypicture.jpeg';
//import Card from 'react-bootstrap/Card';


class About extends React.Component {

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

      
  <div class="row no-gutters bg-light">
  <div class="col-md-5 mb-md-0 p-md-4">
       
   <h1>About Me</h1>
    <img
			className={"img-fluid " + this.props.fadeIn}
			src={myPicture}
			alt="my picture"
			style={styles.img}
	/>
        </div>
    <div class="col-md-7 position-static p-4 pl-md-4">
    <h5 class="text-dark" ><h2>I'm</h2> <strong> Kanyarut Pornamnuay</strong></h5>



     </div>


     
    </div>







    
</div>






            
    
            );
        }
     };
    export default About;