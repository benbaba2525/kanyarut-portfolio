import React from 'react';
import '../styles/portfolio.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/themes/theme-c137.css';
import "react-on-scroll-animation/build/index.css";
import Rosa from "react-on-scroll-animation" ;

//Import images to Fancy Card
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
import TrainScheduler from '../img/TrainScheduler.png';
import FriendFinder from '../img/Friend-Finder.png';
import Burger from '../img/burger.png';

// Import images for Modal Pop up
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
import PopTrainScheduler from '../img/PopTrainSchedule.png';
import PopFriendFinder from '../img/PopFriendFinder.png';
import PopBurger from '../img/PopEatBurger.png';


class Portfolio extends React.Component {

    render(){

       return (
         
<div id="porfolioWrapper" style={{backgroundColor: '#758d8df0', height: '100%',width:'100%', padding:'10px'}}>
    
          <div class="animation-wrapper">
            <div class="particle particle-1"></div>
            <div class="particle particle-2"></div>
            <div class="particle particle-3"></div>
            <div class="particle particle-4"></div>
          </div>      

              <Rosa animation="zoom-in"   
                duration={300}   
                delay={300} >  
               <h1><u>Portfolio</u></h1>
               </Rosa> 
              <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
  
                    <div class="row">
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
                                <h3 className="title">Christmas Trivia Game</h3>
                                 <div>
                                   <Popup trigger={<button className="button"> View Project </button>} modal>
                                      {close => (
                                           <span>
                                             <a className="close" onClick={close}> &times; </a>
                                              <a target="_blank" rel="nofollow" href="https://benbaba2525.github.io/TriviaGame/">
                                               <img src={PopTriviaGame} style={{width: '100%'}}></img>   
                                              </a>
                                               <br></br>
                                                <h5 style={{padding: '5px'}}>Chrismas Trivia Game</h5> 
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
                        
                        <div className="col-lg-4 col-md-6">
                         <div className="fancy-cards">
                          <div className="fancy-card">
                            <div className="top">
                              <img src={TrainScheduler}></img>
                               <div className="caption">
                                <h3 className="title">Train Scheduler</h3>
                                 <div>
                                   <Popup trigger={<button className="button"> View Project </button>} modal>
                                      {close => (
                                           <span>
                                             <a className="close" onClick={close}> &times; </a>
                                              <a target="_blank" rel="nofollow" href="https://benbaba2525.github.io/Train-Scheduler/">
                                               <img src={PopTrainScheduler} style={{width: '100%'}}></img>   
                                              </a>
                                               <br></br>
                                                <h5 style={{padding: '5px'}}>Train Scheduler</h5> 
                                                 <p style={{color: '#111111', fontSize:'20px'}}>
                                                 JavaScript using server side storage (Firebase) and Date objects (The Moment.js library)
                                                </p>
                                                <hr></hr>
                                                  <AwesomeButton size="small" type="primary">HTML</AwesomeButton>
                                                  <AwesomeButton size="small" type="primary">CSS</AwesomeButton>
                                                  <AwesomeButton size="small" type="primary">Bootstrap</AwesomeButton>
                                                  <AwesomeButton size="medium" type="primary">JavaScript</AwesomeButton>
                                                  <AwesomeButton size="medium" type="primary">jQuery</AwesomeButton>
                                                  <AwesomeButton size="medium" type="primary">Moment.js</AwesomeButton>
                                                  <AwesomeButton size="medium" type="primary">Firebase</AwesomeButton>
                                                  <AwesomeButton size="large" type="primary">Authenticate Using Google Sign-In</AwesomeButton>
                                                  <AwesomeButton size="large" type="primary">Authenticate Using GitHub Sign-In</AwesomeButton>
                                               <div className="col-xs-6 social text-right">
                                                 <a href="https://github.com/benbaba2525/Train-Scheduler" target="_blank"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                                                 <a href="https://benbaba2525.github.io/Train-Scheduler/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
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
                              <img src={FriendFinder}></img>
                               <div className="caption">
                                <h3 className="title">Friend Finder</h3>
                                 <div>
                                   <Popup trigger={<button className="button"> View Project </button>} modal>
                                      {close => (
                                           <span>
                                             <a className="close" onClick={close}> &times; </a>
                                              <a target="_blank" rel="nofollow" href="https://friend-finder-appp.herokuapp.com/">
                                               <img src={PopFriendFinder} style={{width: '100%'}}></img>   
                                              </a>
                                               <br></br>
                                                <h5 style={{padding: '5px'}}>Friend Finder</h5> 
                                                 <p style={{color: '#111111', fontSize:'20px'}}>
                                                 This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. 
                                                 The app will then display the name and picture of the user with the best overall match.
                                                </p>
                                                <hr></hr>
                                                  <AwesomeButton size="small" type="primary">HTML</AwesomeButton>
                                                  <AwesomeButton size="small" type="primary">CSS</AwesomeButton>
                                                  <AwesomeButton size="small" type="primary">Bootstrap</AwesomeButton>
                                                  <AwesomeButton size="medium" type="primary">JavaScript</AwesomeButton>
                                                  <AwesomeButton size="medium" type="primary">Node.js</AwesomeButton>
                                                  <AwesomeButton size="medium" type="primary">Express.js</AwesomeButton>
                                                  <AwesomeButton size="small" type="primary">JSON</AwesomeButton>
                                                  <AwesomeButton size="medium" type="primary">Postman</AwesomeButton>
                                               <div className="col-xs-6 social text-right">
                                                 <a href="https://github.com/benbaba2525/Friend-Finder" target="_blank"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                                                 <a href="https://friend-finder-appp.herokuapp.com/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
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
                              <img src={Burger}></img>
                               <div className="caption">
                                <h3 className="title">Eat Da Burger</h3>
                                 <div>
                                   <Popup trigger={<button className="button"> View Project </button>} modal>
                                      {close => (
                                           <span>
                                             <a className="close" onClick={close}> &times; </a>
                                              <a target="_blank" rel="nofollow" href="https://burgers-appp.herokuapp.com/">
                                               <img src={PopBurger} style={{width: '100%'}}></img>   
                                              </a>
                                               <br></br>
                                                <h5 style={{padding: '5px'}}>Eat Da Burger</h5> 
                                                 <p style={{color: '#111111', fontSize:'20px'}}>
                                                 Create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!).
                                                </p>
                                                <hr></hr>
                                                  <AwesomeButton size="small" type="primary">HTML</AwesomeButton>
                                                  <AwesomeButton size="small" type="primary">CSS</AwesomeButton>
                                                  <AwesomeButton size="small" type="primary">Bootstrap</AwesomeButton>
                                                  <AwesomeButton size="medium" type="primary">JavaScript</AwesomeButton>
                                                  <AwesomeButton size="medium" type="primary">jQuery</AwesomeButton>
                                                  <AwesomeButton size="medium" type="primary">Node.js</AwesomeButton>
                                                  <AwesomeButton size="medium" type="primary">Express.js</AwesomeButton>
                                                  <AwesomeButton size="medium" type="primary">Handlebars</AwesomeButton>
                                                  <AwesomeButton size="small" type="primary">MySQL</AwesomeButton>
                                               <div className="col-xs-6 social text-right">
                                                 <a href="https://github.com/benbaba2525/burger" target="_blank"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                                                 <a href="https://burgers-appp.herokuapp.com/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
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
                    </div>
                </ScrollAnimation>
            </div>                        
                        
           );
        }
    };
                        
 export default Portfolio;
                        
    