import React from 'react';
import rightArrow from '../assets/rightArrow.svg';
function LinkContainer() {
  return (
    <a href='https://www.google.com/' target='_blank' className='linkContainer'>
      <div className='wishEmojiContainer'>🎂</div>
      <h3>Check out the Wish Generator!</h3>
      <img src={rightArrow} className='linkArrow' />
    </a>
  );
}

export default LinkContainer;
