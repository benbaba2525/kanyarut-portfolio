import React from "react";
import "../styles/navBar.scss";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Logo from "../img/KP-logo.png";



class NavBar extends React.Component {
    constructor(props){
      super(props);
      this.state={
        menuOpen:false,
      }
    }
    
    handleMenuClick() {
      this.setState({menuOpen:!this.state.menuOpen});
    }
  

    handleLinkClick() {
      this.setState({menuOpen: false});
    }
    
    render(){
      const styles= 
        {
          container:{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: "99",
            opacity: 0.9,
            display:"flex",
            alignItems:"center",
            width: "100%",
            height:"8%",
            color: "white",
            fontFamily:"Lobster",
          },
          logo: {
            margin: "0 auto",
            marginTop: "8px",
          },
          body: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
            filter: this.state.menuOpen ? "blur(2px)":null,
            transition: "filter 0.5s ease",
          },
        }
    
      
      return(
        <div>
         <div style={styles.logo}><img src={Logo}></img></div>
          <div style={styles.container}>                
            <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color="white"/>
          </div>
            <Menu open={this.state.menuOpen}>

                 <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
            
                  <MenuItem onClick={()=>{this.handleLinkClick();}}>
                    <a href="#backgroundWrapper" className="nav-link text-light"><i>Home<span className="sr-only">(current)</span></i></a>
                  </MenuItem>

                   <MenuItem onClick={()=>{this.handleLinkClick();}}>
                    <a href="#aboutMe" className="nav-link text-light"><i>About<span className="sr-only">(current)</span></i></a>
                   </MenuItem>

                   <MenuItem onClick={()=>{this.handleLinkClick();}}>
                   <a href="#skills" className="nav-link text-light"><i>Skills<span className="sr-only">(current)</span></i></a>
                   </MenuItem>

                   <MenuItem onClick={()=>{this.handleLinkClick();}}>
                   <a href="#porfolioWrapper" className="nav-link text-light"><i>Portfolio<span className="sr-only">(current)</span></i></a>
                   </MenuItem>

                   <MenuItem onClick={()=>{this.handleLinkClick();}}>
                   <a href="#contact" className="nav-link text-light"><i>Contact<span className="sr-only">(current)</span></i></a>
                   </MenuItem>

                 </ScrollAnimation>
             </Menu>          
        </div>
      )
    }
  }
  
  /* MenuItem.jsx*/
  class MenuItem extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        hover:false,
      }
    }
    
    handleHover(){
      this.setState({hover:!this.state.hover});
    }
    
    render(){
      const styles={
        container: {
          opacity: 0,
          animation: "1s appear forwards",
          animationDelay:this.props.delay,
        },
        menuItem:{
          fontFamily:`"Open Sans", sans-serif`,
          fontSize: "1.5rem",
          padding: "1rem 0",
          margin: "0 5%",
          cursor: "pointer",
        },
        line: {
          width: "90%",
          height: "1px",
          background: "gray",
          margin: "0 auto",
        }
      }
      return(
        <div style={styles.container}>
      
          <div 
            style={styles.menuItem} 
            onMouseEnter={()=>{this.handleHover();}} 
            onMouseLeave={()=>{this.handleHover();}}
            onClick={this.props.onClick}
          >
            {this.props.children}
          </div>
        <div style={styles.line}/>
      </div>  
      )
    }
  }
  
  /* Menu.jsx */
  class Menu extends React.Component {
    constructor(props){
      super(props);
      this.state={
        open: this.props.open? this.props.open:false,
      }
    }
      
    componentWillReceiveProps(nextProps){
      if(nextProps.open !== this.state.open){
        this.setState({open:nextProps.open});
      }
    }
    
    render(){
      const styles={
        container: {
          position: "absolute",
          top: 0,
          left: 0,
          height: this.state.open? "100%": 0,
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          background: "#001a1a",
          opacity: 0.95,
          color: "#fafafa",
          transition: "height 0.3s ease",
          zIndex: 2,
        },
        menuList: {
          paddingTop: "15rem",
        }
      }
      return(
        <div style={styles.container}>
          {
            this.state.open?
              <div style={styles.menuList}>
                {this.props.children}
              </div>:null
          }
        </div>
      )
    }
  }
  
  /* MenuButton.jsx */
  class MenuButton extends React.Component {
    constructor(props){
      super(props);
      this.state={
        open: this.props.open? this.props.open:false,
        color: this.props.color? this.props.color:"black",
      }
    }
  
    componentWillReceiveProps(nextProps){
      if(nextProps.open !== this.state.open){
        this.setState({open:nextProps.open});
      }
    }
    
    handleClick(){
    this.setState({open:!this.state.open});
    }
    
    render(){
      const styles = {
        container: {
            height: "150px",
            width: "150px",
            display:"flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            padding: "4px",  
        },
        line: {
            height: "4px",
            width: "35px",
            background: this.state.color,
            transition: "all 0.2s ease",
        },
        lineTop: {
            transform: this.state.open ? "rotate(45deg)":"none",
            transformOrigin: "top left",
            marginBottom: "8px",
        },
        lineMiddle: {
          opacity: this.state.open ? 0: 1,
          transform: this.state.open ? "translateX(-16px)":"none",
        },
        lineBottom: {
            transform: this.state.open ? "translateX(-1px) rotate(-45deg)":"none",
            transformOrigin: "top left",
            marginTop: "8px",
        },       
      }
      return(
        <div style={styles.container} 
          onClick={this.props.onClick ? this.props.onClick: 
            ()=> {this.handleClick();}}>
          <div style={{...styles.line,...styles.lineTop}}/>
          <div style={{...styles.line,...styles.lineMiddle}}/>
          <div style={{...styles.line,...styles.lineBottom}}/>
        </div>
      )
    }
  }; 
  export default NavBar;