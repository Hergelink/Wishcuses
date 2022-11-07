import React from 'react';
import { Link } from 'react-router-dom';
import HomeFooter from '../components/home-components/HomeFooter';

function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className='homeContainer'>
      <div className='homeInfoDiv'>
        <h1>Wishes and Excuses made simple!</h1>
        <h2>Generate wishes or excuses for different occasions</h2>
      </div>

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
              <h4
                style={{
                  backgroundColor: 'black',
                  color: 'red',
                  padding: '3px',
                  borderRadius: '3px',
                }}
              >
                Currently under construction!
              </h4>
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
      </main>

      <HomeFooter />
    </div>
  );
}

export default HomePage;
