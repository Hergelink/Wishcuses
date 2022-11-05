import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='mainHeader'>
      <Link to='/'>Wishcuses</Link>
    </header>
  );
}

export default Header;
