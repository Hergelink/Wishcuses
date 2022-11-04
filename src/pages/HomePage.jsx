import React from 'react';
import { Link } from 'react-router-dom';
import HomeFooter from '../components/home-components/HomeFooter';

function HomePage() {
  return (
    <div className='homeContainer'>
      <div className='homeInfoDiv'>
        <h1>Generate wishes or excuses for different occasions</h1>
      </div>

      <Link to='/wishes-generator' className='homeWishesContainer'>
        <div className='homeDivs'>
          <div className='homeEmojiDivs'>🎂</div>
          <h3>Generate Wishes</h3>
        </div>
      </Link>

      <Link to='/excuse-generator' className='homeExcuseContainer'>
        <div className='homeDivs'>
          <div className='homeEmojiDivs'>🧰</div>
          <h3>Generate Excuses</h3>
        </div>
      </Link>

      <HomeFooter />
    </div>
  );
}

export default HomePage;
