import React from 'react';
import rightArrow from '../../assets/rightArrow.svg';
function LinkContainer() {
  return (
    <a href='https://www.google.com/' target='_blank' className='wishesLinkContainer'>
      <div className='linkToExcuseContainer'>🧰</div>
      <h3>Check out the Excuse Generator!</h3>
      <img src={rightArrow} className='linkArrow' />
    </a>
  );
}

export default LinkContainer;
