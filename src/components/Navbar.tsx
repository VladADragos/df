import React from 'react';
import { useHistory } from 'react-router-dom';

function Navbar() {
  const history = useHistory();
  return (
    <nav className='Navbar'>
      <header className='Header' onClick={() => history.push('/')}>
        Terra News <i className='fas fa-globe-americas'></i>
      </header>
      <ul className='Navbar__links'>
        <li className='a'>
          <a href='#' className='Navbar__link'>
            {' '}
            Economy <i className='fas fa-signal'></i>
          </a>{' '}
        </li>
        <li className='a'>
          <a href='#' className='Navbar__link'>
            {' '}
            Global <i className='fas fa-globe-europe'></i>
          </a>{' '}
        </li>
        <li className='a'>
          <a href='#' className='Navbar__link'>
            {' '}
            Space Affairs <i className='fas fa-rocket'></i>
          </a>{' '}
        </li>
        <li className='a'>
          <a href='#' className='Navbar__link'>
            {' '}
            Sports <i className='fas fa-running'></i>
          </a>{' '}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
