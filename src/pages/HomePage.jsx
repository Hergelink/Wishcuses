import React from 'react';
import { Link } from 'react-router-dom';
import HomeInfoDiv from '../components/home-components/HomeInfoDiv';
import HomeFooter from '../components/home-components/HomeFooter';
import KlevvversInfo from '../components/KlevvversInfo'
function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className='homeContainer'>
      <HomeInfoDiv />

      <main className='homeMain'>
        <div className='homeLinkContainers'>
          <Link
            to='/wishes-generator'
            className='homeWishesContainer'
            onClick={scrollToTop}
          >
            <div className='homeDivs'>
              <div className='homeEmojiDivs'>🎂</div>
              <h3>Generate Wishes</h3>
            </div>
          </Link>

          <Link
            to='/excuse-generator'
            className='homeExcuseContainer'
            onClick={scrollToTop}
          >
            <div className='homeDivs'>
              <div className='homeEmojiDivs'>🧰</div>
              <h3>Generate Excuses</h3>
            </div>
          </Link>
        </div>
        <KlevvversInfo />
      </main>

      <HomeFooter />
    </div>
  );
}

export default HomePage;
