import React from 'react';
import github from '../assets/images/github-icon.png';
import linkedin from '../assets/images/linkedin-icon.png';
import stackoverflow from '../assets/images/stackoverflow-icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <a className="footer-link" href="https://github.com/csullins" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub" />
      </a>
      <a className="footer-link" href="https://www.linkedin.com/in/camilesullins/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a className="footer-link" href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">
        <img src={stackoverflow} alt="Stack Overflow" />
      </a>
    </div>
  );
};

export default Footer;
