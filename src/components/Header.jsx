import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='mainHeader'>
      <Link to='/' className='mainHeaderLogo'>Wishcuses<span className='logoDot'>.</span></Link>
    </header>
  );
}

export default Header;
