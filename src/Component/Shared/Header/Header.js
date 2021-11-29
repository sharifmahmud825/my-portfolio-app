import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg nav-bar'>
      <div className='container'>
        <button
          className='navbar-toggler toggle-button custom-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav m-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/home' className='nav-link menu'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link menu'>
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/myProjects' className='nav-link menu'>
                My Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link menu'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
