import React from 'react';
import '../../styles/portfolio.css';
import {
  PortfolioWrapper,
  BackgroundVideo
} from '../../styles/PortfolioStyles';
import windyVid from '../../assets/images/windy.mp4';
import triviaMind from '../../assets/images/triviaMind.png';
import firstPortfolio from '../../assets/images/firstPortfolio.png'
import BarkBook from '../../assets/images/barkbook.png'

export default function Portfolio() {
  return (
    <PortfolioWrapper>
      <h1 className='portfolio-title'>A collection of work.</h1>

      <BackgroundVideo autoPlay muted loop>
        <source src={windyVid} type="video/mp4" />
      </BackgroundVideo>

      <ul className="card-background">
        <a className="portfolio-links" href="https://barkbookapp.herokuapp.com/" target="_blank" rel="noopener noreferrer"> 
          <img className="portfolio-image" src={BarkBook} alt="Barkbook website">
          </img>
        </a>
        <a className="portfolio-links" href="https://cjsolis12.github.io/trivia-mind-/" target="_blank" rel="noopener noreferrer">
        <img className="portfolio-image" src={triviaMind} alt='TriviaMind' type='image/png' />
        </a>
        <a className="portfolio-links" href="https://csullins.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">
        <img className="portfolio-image" src={firstPortfolio} alt='first portfolio' type='image/png' />     
        </a>
      </ul>
    </PortfolioWrapper>
  );
}
