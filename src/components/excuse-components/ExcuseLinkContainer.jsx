import React from 'react';
import {Link} from 'react-router-dom';
import rightArrow from '../../assets/rightArrow.svg';
function ExcuseLinkContainer() {

  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <Link to='/wishes-generator' className='excuseLinkContainer' onClick={scrollToTop}>
      <div className='linkToWishContainer'>🎂</div>
      <h3>Check out the Wish Generator!</h3>
      <img src={rightArrow} className='linkArrow' />
    </Link>
  );
}

export default ExcuseLinkContainer;
