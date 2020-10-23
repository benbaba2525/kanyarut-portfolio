import React from 'react';
import myPicture from '../img/mypicture.jpeg'


class About extends React.Component {

	render(){
        const styles= 
        {
          container:{
           marginTop: '320px',
           background: 'white'  
          },
          img:{
            borderRadius: 50 + "%",
			height: 300 + "px",
			width: 300 + "px"
          }
        };
        return (
        

<div style={styles.container}>
<h1>About Me</h1>
    <img
			className={"img-fluid " + this.props.fadeIn}
			src={myPicture}
			alt="my picture"
			style={styles.img}
	/>
</div>






            
    
            );
        }
     };
    export default About;