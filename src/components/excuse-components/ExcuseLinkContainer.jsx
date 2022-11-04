import React from 'react';
import {Link} from 'react-router-dom';
import rightArrow from '../../assets/rightArrow.svg';
function ExcuseLinkContainer() {
  return (
    <Link to='/wishes-generator' className='excuseLinkContainer'>
      <div className='linkToWishContainer'>🎂</div>
      <h3>Check out the Wish Generator!</h3>
      <img src={rightArrow} className='linkArrow' />
    </Link>
  );
}

export default ExcuseLinkContainer;
