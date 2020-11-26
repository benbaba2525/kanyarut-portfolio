import React from "react";
import "../styles/footer.scss";
import "animate.css/animate.min.css";

     class Footer extends React.Component {
       
	                  render(){     
                         
                       return (
                          <div id="contact">
                              <div className="col-xs-6 social text-center">
                                  <a href="https://github.com/benbaba2525" target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a>
                                  <a href="https://www.linkedin.com/in/kanyarut-pornamnuay-b9a2501a1/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                  <a href="https://www.facebook.com/ben.pornamnuay" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>                                  
                                  <a href="https://www.instagram.com/benbaba2525/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                  <br></br>
                                  <p className="contactInfo"><i class="fa fa-envelope-o" aria-hidden="true"></i>benbaba2525@gmail.com</p>
 
                              </div> 
                              
                            <div className="footer-font text-center py-3">
                               <span className ="footer-copyright">© 2020 Copyright : </span>Kanyarut (Ben) Pornamnuay
                            </div>
                          </div>

            );
        }
     };
    export default Footer;