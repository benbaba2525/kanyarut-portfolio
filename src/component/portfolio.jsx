import React from 'react';
import '../styles/portfolio.scss';
import DateNightPlanner from '../img/dateNightPlanner.png'
import Quarantine from '../img/quarantine-coffee.png';
import Ebazaar from '../img/eBazaar.png';
import GoogleBooks from '../img/Google Book Search.png';
import ClickyGame from '../img/clickyGame.png';
import NewsScraper from '../img/Scrapper News.png';
import Giphy from '../img/GifTastic.png';
import WordGuessGame from '../img/Word-Guess-Game.png';
import CrystalsGame from '../img/Crystals-Collector-Game.png';
import TriviaGame from '../img/TriviaGame.png';





import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import PopDatenightPlanner from '../img/PopDatenightPlanner.png';
import PopQuarantine from '../img/PopQuarantine.png';
import PopEbazaar from '../img/PopEbazaar.png';
import PopGoogleBooks from '../img/PopGoogleBook.png';
import PopClickyGame from '../img/PopClickyGame.png';
import PopNewsScraper from '../img/PopScrapperNews.png';
import PopGiphy from '../img/PopGifTastic.png';
import PopWordGuessGame from '../img/PopWordGuessGame.png';
import PopCrystalsGame from '../img/PopCrystals.png';
import PopTriviaGame from '../img/PopTrivia.png';

import ScrollAnimation from 'react-animate-on-scroll';
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/themes/theme-c137.css';


class Portfolio extends React.Component {

    render(){

       return (
         

<div id="porfolioWrapper" style={{backgroundColor: '#c6dddd', height: '100vh', padding:'10px'}}>
<ScrollAnimation animateIn='wobble'initiallyVisible={true}>
<h1>Portfolio</h1>
</ScrollAnimation>

<ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
<div class="row" style={{backgroundColor: '#c6dddd', margitTop:'10%'}}>

<div className="col-lg-4 col-md-6">
 <div className="fancy-cards">
  <div className="fancy-card">
    <div className="top">
      <img src={DateNightPlanner}></img>
       <div className="caption">
        <h3 className="title">Date Night Planner</h3>
         <div>
           <Popup trigger={<button className="button"> View Project </button>} modal>
              {close => (
                   <span>
                     <a className="close" onClick={close}> &times; </a>
                      <a target="_blank" rel="nofollow" href="https://benbaba2525.github.io/Project1-Date-Night-Planer/">
                       <img src={PopDatenightPlanner} style={{width: '100%'}}></img>   
                      </a>
                       <br></br>
                        <h5 style={{padding: '5px'}}>Date Night Planer</h5> 
                         <p style={{color: '#111111', fontSize:'20px'}}>
                          is providing user to plan their date night at home
                          by check on where to order food and search for movies to watch.
                        </p>
                        <hr></hr>
                          <AwesomeButton size="small" type="primary">HTML</AwesomeButton>
                          <AwesomeButton size="small" type="primary">CSS</AwesomeButton>
                          <AwesomeButton size="small" type="primary">Bootstrap</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">JavaScript</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">jQuery</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">AJAX</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">APIs</AwesomeButton>

                       <div className="col-xs-6 social text-right">
                         <a href="https://github.com/benbaba2525/Project1-Date-Night-Planer" target="_blank"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                         <a href="https://benbaba2525.github.io/Project1-Date-Night-Planer/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
                  </div>    
               </span> 
              )}
            </Popup>
           </div>
          </div>
        </div>
      <div className="middle"></div>
      <div className="bottom"></div>
    </div>
  </div>
</div>


<div className="col-lg-4 col-md-6">
 <div className="fancy-cards">
  <div className="fancy-card">
    <div className="top">
      <img src={Quarantine}></img>
       <div className="caption">
        <h3 className="title">Quarantine Coffee</h3>
         <div>
           <Popup trigger={<button className="button"> View Project </button>} modal>
              {close => (
                   <span>
                     <a className="close" onClick={close}> &times; </a>
                      <a target="_blank" rel="nofollow" href="https://quarantine-coffee-life.herokuapp.com/">
                       <img src={PopQuarantine} style={{width: '100%'}}></img>   
                      </a>
                       <br></br>
                        <h5 style={{padding: '5px'}}>Quarantine Coffee</h5> 
                         <p style={{color: '#111111', fontSize:'20px'}}>
                         A new platform for a Virtual Coffee Shop! that you can just grab your own coffee and chat, read
                         and connect, all without stepping outside your door.
                        </p>
                        <hr></hr>
                          <AwesomeButton size="small" type="primary">HTML</AwesomeButton>
                          <AwesomeButton size="small" type="primary">CSS</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Bootstrap</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">JavaScript</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Handlebars</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Node.js</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Express.js</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Socket.io</AwesomeButton>
                          <AwesomeButton size="small" type="primary">MySQL</AwesomeButton>

                       <div className="col-xs-6 social text-right">
                         <a href="https://github.com/QuarantineNightOwls/Quarantine-Coffee" target="_blank"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                         <a href="https://quarantine-coffee-life.herokuapp.com/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
                  </div>    
               </span> 
              )}
            </Popup>
           </div>
          </div>
        </div>
      <div className="middle"></div>
      <div className="bottom"></div>
    </div>
  </div>
</div>
  
<div className="col-lg-4 col-md-6">
 <div className="fancy-cards">
  <div className="fancy-card">
    <div className="top">
      <img src={Ebazaar}></img>
       <div className="caption">
        <h3 className="title">eBazaar</h3>
         <div>
           <Popup trigger={<button className="button"> View Project </button>} modal>
              {close => (
                   <span>
                     <a className="close" onClick={close}> &times; </a>
                      <a target="_blank" rel="nofollow" href="https://e---bazaar.herokuapp.com/">
                       <img src={PopEbazaar} style={{width: '100%'}}></img>   
                      </a>
                       <br></br>
                        <h5 style={{padding: '5px'}}>eBArzaar</h5> 
                         <p style={{color: '#111111', fontSize:'20px'}}>
                         is a platform for multi-vendor marketplace which is like - Amazon, eBay,and Craigslist.
                        </p>
                        <hr></hr>
                          <AwesomeButton size="small" type="primary">HTML</AwesomeButton>
                          <AwesomeButton size="small" type="primary">CSS</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Material-UI</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">JavaScript</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">React.js</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Node.js</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Express.js</AwesomeButton>
                          <AwesomeButton size="large" type="primary">Json Web Tokens</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">MongoDB</AwesomeButton>
                       <div className="col-xs-6 social text-right">
                         <a href="https://github.com/skang91/eBazaar" target="_blank"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                         <a href="https://e---bazaar.herokuapp.com/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
                  </div>    
               </span> 
              )}
            </Popup>
           </div>
          </div>
        </div>
      <div className="middle"></div>
      <div className="bottom"></div>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-6">
 <div className="fancy-cards">
  <div className="fancy-card">
    <div className="top">
      <img src={GoogleBooks}></img>
       <div className="caption">
        <h3 className="title">Google Books Search</h3>
         <div>
           <Popup trigger={<button className="button"> View Project </button>} modal>
              {close => (
                   <span>
                     <a className="close" onClick={close}> &times; </a>
                      <a target="_blank" rel="nofollow" href="https://google--books-search.herokuapp.com/">
                       <img src={PopGoogleBooks} style={{width: '100%'}}></img>   
                      </a>
                       <br></br>
                        <h5 style={{padding: '5px'}}>Google Books Search</h5> 
                         <p style={{color: '#111111', fontSize:'20px'}}>
                         is a React-based Google Books Search app that allows users to search for books via the Google Books API.
                        </p>
                        <hr></hr>
                          <AwesomeButton size="small" type="primary">HTML</AwesomeButton>
                          <AwesomeButton size="small" type="primary">CSS</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Bootstrap</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">JavaScript</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">React.js</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Node.js</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Express.js</AwesomeButton>
                          <AwesomeButton size="small" type="primary">Axios</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">MongoDB</AwesomeButton>
                       <div className="col-xs-6 social text-right">
                         <a href="https://github.com/benbaba2525/Google-Books-Search" target="_blank"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                         <a href="https://google--books-search.herokuapp.com/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
                  </div>    
               </span> 
              )}
            </Popup>
           </div>
          </div>
        </div>
      <div className="middle"></div>
      <div className="bottom"></div>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-6">
 <div className="fancy-cards">
  <div className="fancy-card">
    <div className="top">
      <img src={ClickyGame}></img>
       <div className="caption">
        <h3 className="title">Clicky Game Avengers</h3>
         <div>
           <Popup trigger={<button className="button"> View Project </button>} modal>
              {close => (
                   <span>
                     <a className="close" onClick={close}> &times; </a>
                      <a target="_blank" rel="nofollow" href="https://benbaba2525.github.io/Clicky-Game-Avengers/">
                       <img src={PopClickyGame} style={{width: '100%'}}></img>   
                      </a>
                       <br></br>
                        <h5 style={{padding: '5px'}}>Clicky Game Avengers</h5> 
                         <p style={{color: '#111111', fontSize:'20px'}}>
                         Click game built with React to track clicks and present the user with a score.
                        </p>
                        <hr></hr>
                          <AwesomeButton size="small" type="primary">HTML</AwesomeButton>
                          <AwesomeButton size="small" type="primary">CSS</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Bootstrap</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">JavaScript</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">React.js</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Node.js</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Express.js</AwesomeButton>
                       <div className="col-xs-6 social text-right">
                         <a href="https://github.com/benbaba2525/Clicky-Game-Avengers" target="_blank"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                         <a href="https://benbaba2525.github.io/Clicky-Game-Avengers/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
                  </div>    
               </span> 
              )}
            </Popup>
           </div>
          </div>
        </div>
      <div className="middle"></div>
      <div className="bottom"></div>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-6">
 <div className="fancy-cards">
  <div className="fancy-card">
    <div className="top">
      <img src={NewsScraper}></img>
       <div className="caption">
        <h3 className="title">News Scrapper</h3>
         <div>
           <Popup trigger={<button className="button"> View Project </button>} modal>
              {close => (
                   <span>
                     <a className="close" onClick={close}> &times; </a>
                      <a target="_blank" rel="nofollow" href="https://mongodb-scraper-news.herokuapp.com/">
                       <img src={PopNewsScraper} style={{width: '100%'}}></img>   
                      </a>
                       <br></br>
                        <h5 style={{padding: '5px'}}>News Scrapper</h5> 
                         <p style={{color: '#111111', fontSize:'20px'}}>
                         This application will lets users scrape news articles : the title, summary and link from the The New York Times website.
                        </p>
                        <hr></hr>
                          <AwesomeButton size="small" type="primary">HTML</AwesomeButton>
                          <AwesomeButton size="small" type="primary">CSS</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Bootstrap</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">JavaScript</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Handlebars</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Node.js</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Express.js</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">Axios</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">MongoDB</AwesomeButton>
                       <div className="col-xs-6 social text-right">
                         <a href="https://github.com/benbaba2525/MongoDB-All-the-News-That-s-Fit-to-Scrape" target="_blank"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                         <a href="https://mongodb-scraper-news.herokuapp.com/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
                  </div>    
               </span> 
              )}
            </Popup>
           </div>
          </div>
        </div>
      <div className="middle"></div>
      <div className="bottom"></div>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-6">
 <div className="fancy-cards">
  <div className="fancy-card">
    <div className="top">
      <img src={Giphy}></img>
       <div className="caption">
        <h3 className="title">Giphy Advengers</h3>
         <div>
           <Popup trigger={<button className="button"> View Project </button>} modal>
              {close => (
                   <span>
                     <a className="close" onClick={close}> &times; </a>
                      <a target="_blank" rel="nofollow" href="https://benbaba2525.github.io/GIPHY-Advengers/">
                       <img src={PopGiphy} style={{width: '100%'}}></img>   
                      </a>
                       <br></br>
                        <h5 style={{padding: '5px'}}>Giphy Advengers</h5> 
                         <p style={{color: '#111111', fontSize:'20px'}}>
                         Using the GIPHY API to make a dynamic web page that populates with gifs. 
                        </p>
                        <hr></hr>
                          <AwesomeButton size="small" type="primary">HTML</AwesomeButton>
                          <AwesomeButton size="small" type="primary">CSS</AwesomeButton>
                          <AwesomeButton size="small" type="primary">Bootstrap</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">JavaScript</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">jQuery</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">AJAX</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">APIs</AwesomeButton>

                       <div className="col-xs-6 social text-right">
                         <a href="https://github.com/benbaba2525/GIPHY-Advengers" target="_blank"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                         <a href="https://benbaba2525.github.io/GIPHY-Advengers/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
                  </div>    
               </span> 
              )}
            </Popup>
           </div>
          </div>
        </div>
      <div className="middle"></div>
      <div className="bottom"></div>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-6">
 <div className="fancy-cards">
  <div className="fancy-card">
    <div className="top">
      <img src={WordGuessGame}></img>
       <div className="caption">
        <h3 className="title">Word Guess Game</h3>
         <div>
           <Popup trigger={<button className="button"> View Project </button>} modal>
              {close => (
                   <span>
                     <a className="close" onClick={close}> &times; </a>
                      <a target="_blank" rel="nofollow" href="https://benbaba2525.github.io/Word-Guess-Game/">
                       <img src={PopWordGuessGame} style={{width: '100%'}}></img>   
                      </a>
                       <br></br>
                        <h5 style={{padding: '5px'}}>Word Guess Game</h5> 
                         <p style={{color: '#111111', fontSize:'20px'}}>
                         Word Guess Game game built with JavaScript and jQuery. 
                        </p>
                        <hr></hr>
                          <AwesomeButton size="small" type="primary">HTML</AwesomeButton>
                          <AwesomeButton size="small" type="primary">CSS</AwesomeButton>
                          <AwesomeButton size="small" type="primary">Bootstrap</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">JavaScript</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">jQuery</AwesomeButton>
                       <div className="col-xs-6 social text-right">
                         <a href="https://github.com/benbaba2525/Word-Guess-Game" target="_blank"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                         <a href="https://benbaba2525.github.io/Word-Guess-Game/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
                  </div>    
               </span> 
              )}
            </Popup>
           </div>
          </div>
        </div>
      <div className="middle"></div>
      <div className="bottom"></div>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-6">
 <div className="fancy-cards">
  <div className="fancy-card">
    <div className="top">
      <img src={CrystalsGame}></img>
       <div className="caption">
        <h3 className="title">Crystals Collector Game</h3>
         <div>
           <Popup trigger={<button className="button"> View Project </button>} modal>
              {close => (
                   <span>
                     <a className="close" onClick={close}> &times; </a>
                      <a target="_blank" rel="nofollow" href="https://benbaba2525.github.io/Crystals-Collector-Game/">
                       <img src={PopCrystalsGame} style={{width: '100%'}}></img>   
                      </a>
                       <br></br>
                        <h5 style={{padding: '5px'}}>Crystals Collector Game</h5> 
                         <p style={{color: '#111111', fontSize:'20px'}}>
                         The player will have to guess the number and make it equal to the random number that the computer given.
                        </p>
                        <hr></hr>
                          <AwesomeButton size="small" type="primary">HTML</AwesomeButton>
                          <AwesomeButton size="small" type="primary">CSS</AwesomeButton>
                          <AwesomeButton size="small" type="primary">Bootstrap</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">JavaScript</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">jQuery</AwesomeButton>
                       <div className="col-xs-6 social text-right">
                         <a href="https://github.com/benbaba2525/Crystals-Collector-Game" target="_blank"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                         <a href="https://benbaba2525.github.io/Crystals-Collector-Game/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
                  </div>    
               </span> 
              )}
            </Popup>
           </div>
          </div>
        </div>
      <div className="middle"></div>
      <div className="bottom"></div>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-6">
 <div className="fancy-cards">
  <div className="fancy-card">
    <div className="top">
      <img src={TriviaGame}></img>
       <div className="caption">
        <h3 className="title">Christmas Trivia</h3>
         <div>
           <Popup trigger={<button className="button"> View Project </button>} modal>
              {close => (
                   <span>
                     <a className="close" onClick={close}> &times; </a>
                      <a target="_blank" rel="nofollow" href="https://benbaba2525.github.io/TriviaGame/">
                       <img src={PopTriviaGame} style={{width: '100%'}}></img>   
                      </a>
                       <br></br>
                        <h5 style={{padding: '5px'}}>Chrismas Trivia</h5> 
                         <p style={{color: '#111111', fontSize:'20px'}}>
                         Trivia game using JavaScript for the logic and jQuery to manipulate HTML.
                        </p>
                        <hr></hr>
                          <AwesomeButton size="small" type="primary">HTML</AwesomeButton>
                          <AwesomeButton size="small" type="primary">CSS</AwesomeButton>
                          <AwesomeButton size="small" type="primary">Bootstrap</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">JavaScript</AwesomeButton>
                          <AwesomeButton size="medium" type="primary">jQuery</AwesomeButton>
                       <div className="col-xs-6 social text-right">
                         <a href="https://github.com/benbaba2525/TriviaGame" target="_blank"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                         <a href="https://benbaba2525.github.io/TriviaGame/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
                  </div>    
               </span> 
              )}
            </Popup>
           </div>
          </div>
        </div>
      <div className="middle"></div>
      <div className="bottom"></div>
    </div>
  </div>
</div>











          
{/* ---------- */}
</div>
</ScrollAnimation>
<div>

</div>

</div>

            );
        }
     };

    
export default Portfolio;

    