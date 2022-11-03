import React from 'react';
import rightArrow from '../assets/rightArrow.svg';

function InfoContainer() {
  return (
    <div className='infoContainer'>
      <h2>
        Excuses made <span className='highlightText'>simple.</span>
      </h2>
      <h4>Generate excuses for different occasions fast & simple</h4>
      <ul className='list'>
        <div className='listItem'>
          <img src={rightArrow} fill='white' className='arrow' />
          <li>Excuses for Family Gatherings</li>
        </div>
        <div className='listItem'>
          <img src={rightArrow} fill='white' className='arrow' />
          <li>Excuses for your Office</li>
        </div>
        <div className='listItem'>
          <img src={rightArrow} fill='white' className='arrow' />
          <li>Excuses for Parties</li>
        </div>
      </ul>
    </div>
  );
}

export default InfoContainer;
