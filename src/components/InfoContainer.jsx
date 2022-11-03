import React from 'react';
import rightArrow from '../assets/rightArrow.svg';

function InfoContainer() {
  return (
    <div className='infoContainer'>
      <h2>
        Wishes made <span className='highlightText'>simple.</span>
      </h2>
      <h4>Generate wishes for different occasions fast & simple</h4>
      <ul className='list'>
        <div className='listItem'>
          <img src={rightArrow} fill='white' className='arrow' />
          <li>Wishes for Birthdays</li>
        </div>
        <div className='listItem'>
          <img src={rightArrow} fill='white' className='arrow' />
          <li>Wishes for Promotions</li>
        </div>
        <div className='listItem'>
          <img src={rightArrow} fill='white' className='arrow' />
          <li>Wishes for Retirements</li>
        </div>
      </ul>
    </div>
  );
}

export default InfoContainer;
