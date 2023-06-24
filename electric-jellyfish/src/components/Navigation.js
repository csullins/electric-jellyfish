import React from 'react';
import {ActiveBtn, InactiveBtn} from '../styles/NavStyles';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        href="#about"
        onClick={() => handlePageChange('About')}
        className={currentPage === 'About' ? 'active' : ''}
      >
        {currentPage === 'About' ? <ActiveBtn>About</ActiveBtn> : <InactiveBtn>About</InactiveBtn>}
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#portfolio"
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'active' : ''}
      >
        {currentPage === 'Portfolio' ? (
          <ActiveBtn>Portfolio</ActiveBtn>
        ) : (
          <InactiveBtn>Portfolio</InactiveBtn>
        )}
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#resume"
        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'active' : ''}
      >
        {currentPage === 'Resume' ? <ActiveBtn>Resume</ActiveBtn> : <InactiveBtn>Resume</InactiveBtn>}
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'active' : ''}
      >
        {currentPage === 'Contact' ? <ActiveBtn>Contact</ActiveBtn> : <InactiveBtn>Contact</InactiveBtn>}
      </a>
    </li>
  </ul>
  );
}

export default Navigation;
