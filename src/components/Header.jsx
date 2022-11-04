import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='mainHeader'>
      <Link to='/'>Generator</Link>
    </header>
  );
}

export default Header;
