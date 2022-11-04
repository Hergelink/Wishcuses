import React from 'react';
import rightArrow from '../../assets/rightArrow.svg';
function ExcuseLinkContainer() {
  return (
    <a href='https://www.google.com/' target='_blank' className='excuseLinkContainer'>
      <div className='linkToWishContainer'>🎂</div>
      <h3>Check out the Wish Generator!</h3>
      <img src={rightArrow} className='linkArrow' />
    </a>
  );
}

export default ExcuseLinkContainer;
