import React from 'react';
import rightArrow from '../assets/rightArrow.svg';
function LinkContainer() {
  return (
    <a
      href='https://excuse-generator-app.netlify.app/'
      target='_blank'
      className='linkContainer'
    >
      <div className='wishEmojiContainer'>🧰</div>
      <h3>Check out the Excuse Generator!</h3>
      <img src={rightArrow} className='linkArrow' />
    </a>
  );
}

export default LinkContainer;
