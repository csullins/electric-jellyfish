import React from 'react';
import '../../styles/portfolio.css';
import TriviaMind from '../../assets/images/triviaMind.png';
import FirstPortfolio from '../../assets/images/firstPortfolio.png'
import BarkBook from '../../assets/images/barkbook.png'
import ShortStack from '../../assets/images/shortstack.png'
import Forecast from '../../assets/images/forecastApp.png'
import pwGenerator from '../../assets/images/pwGen.png'
import codeQuiz from '../../assets/images/codeQuiz.png'

export default function Portfolio() {
  return (
    <div className='porfolio-wrapper'>
      <h1 className='portfolio-title'>A collection of work.
      </h1>
      <ul>
      <a href="https://shortstack.vercel.app/" target="_blank" rel="noopener noreferrer"> 
          <img className="portfolio-image" src={ShortStack} alt="ShortStack website">
          </img>
        </a>
        <a className='repo-link' href='https://github.com/csullins/BarkBook'target="_blank" rel="noopener noreferrer">BarkBook Github Repo </a>

        <a href="https://barkbookapp.herokuapp.com/" target="_blank" rel="noopener noreferrer"> 
          <img className="portfolio-image" src={BarkBook} alt="Barkbook website">
          </img>
        </a>
        <a className='repo-link' href='https://github.com/csullins/BarkBook'target="_blank" rel="noopener noreferrer">BarkBook Github Repo </a>
   
        <a href="https://cjsolis12.github.io/trivia-mind-/" target="_blank" rel="noopener noreferrer">
        <img className="portfolio-image" src={TriviaMind} alt='TriviaMind' type='image/png' />
        </a>
        <a className='repo-link'href="https://github.com/csullins/trivia-mind" target="_blank" rel="noopener noreferrer">TriviaMind Github Repo</a>
      
        <a  href="https://csullins.github.io/camiles-ultimate-coding-quiz-extravaganza/" target="_blank" rel="noopener noreferrer">
          <img className="portfolio-image" src={codeQuiz} alt="coding quiz website">
          </img>
        </a>
        <a className='repo-link' href='https://github.com/csullins/camiles-ultimate-coding-quiz-extravaganza'target="_blank" rel="noopener noreferrer">Code Quiz Repo</a>


        <a  href="https://csullins.github.io/five-day-forecast/" target="_blank" rel="noopener noreferrer">
        <img className="portfolio-image" src={Forecast} alt='forecast app' type='image/png' />
        </a>
        <a className='repo-link' href='https://github.com/csullins/five-day-forecast'target="_blank" rel="noopener noreferrer">Forecast App Github Repo</a>

        <a  href="https://csullins.github.io/password-generator/" target="_blank" rel="noopener noreferrer">
        <img className="portfolio-image" src={pwGenerator} alt='password generator app' type='image/png' />     
        </a>
        <a className='repo-link' href=' https://github.com/csullins/password-generator' target="_blank" rel="noopener noreferrer">Password Generator Github Repo</a>
        <a  href="https://csullins.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">
        <img className="portfolio-image" src={FirstPortfolio} alt='first portfolio' type='image/png' />     
        </a>
        <a className='repo-link' href='https://github.com/csullins/Portfolio'target="_blank" rel="noopener noreferrer">Portfolio Github Repo</a>
      </ul>
    </div>
  );
}
