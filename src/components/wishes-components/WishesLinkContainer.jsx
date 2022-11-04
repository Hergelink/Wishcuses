import React from 'react';
import {Link} from 'react-router-dom';
import rightArrow from '../../assets/rightArrow.svg';
function LinkContainer() {
  return (
    <Link to='/excuse-generator' className='wishesLinkContainer'>
      <div className='linkToExcuseContainer'>🧰</div>
      <h3>Check out the Excuse Generator!</h3>
      <img src={rightArrow} className='linkArrow' />
    </Link>
  );
}

export default LinkContainer;
