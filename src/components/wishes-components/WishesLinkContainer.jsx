import React from 'react';
import {Link} from 'react-router-dom';
import rightArrow from '../../assets/rightArrow.svg';
function LinkContainer() {
  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }
  return (
    <Link to='/excuse-generator' className='wishesLinkContainer' onClick={scrollToTop}>
      <div className='linkToExcuseContainer'>🧰</div>
      <h3>Check out the Excuse Generator!</h3>
      <img src={rightArrow} className='linkArrow' />
    </Link>
  );
}

export default LinkContainer;
