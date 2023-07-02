import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  ActiveBtn,
  InactiveBtn,
} from '../styles/NavStyles';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Nav className='header'>
      <NavItem>
        <NavLink active={currentPage === 'About'} onClick={() => handlePageChange('About')}>
          {currentPage === 'About' ? <ActiveBtn>About</ActiveBtn> : <InactiveBtn>About</InactiveBtn>}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={currentPage === 'Portfolio'} onClick={() => handlePageChange('Portfolio')}>
          {currentPage === 'Portfolio' ? (
            <ActiveBtn>Portfolio</ActiveBtn>
          ) : (
            <InactiveBtn>Portfolio</InactiveBtn>
          )}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={currentPage === 'Resume'} onClick={() => handlePageChange('Resume')}>
          {currentPage === 'Resume' ? <ActiveBtn>Resume</ActiveBtn> : <InactiveBtn>Resume</InactiveBtn>}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={currentPage === 'Contact'} onClick={() => handlePageChange('Contact')}>
          {currentPage === 'Contact' ? <ActiveBtn>Contact</ActiveBtn> : <InactiveBtn>Contact</InactiveBtn>}
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default Navigation;
