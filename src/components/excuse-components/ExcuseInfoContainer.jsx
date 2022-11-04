import React from 'react';
import rightArrow from '../../assets/rightArrow.svg';

function ExcuseInfoContainer() {
  return (
    <div className='excuseInfoContainer'>
      <h2>
        Excuses made <span className='excuseHighlightText'>simple.</span>
      </h2>
      <h4>Generate excuses for different occasions fast & simple</h4>
      <ul className='excuseList'>
        <div className='excuseListItem'>
          <img src={rightArrow} fill='white' className='arrow' />
          <li>Excuses for Family Gatherings</li>
        </div>
        <div className='excuseListItem'>
          <img src={rightArrow} fill='white' className='arrow' />
          <li>Excuses for your Office</li>
        </div>
        <div className='excuseListItem'>
          <img src={rightArrow} fill='white' className='arrow' />
          <li>Excuses for Parties</li>
        </div>
      </ul>
    </div>
  );
}

export default ExcuseInfoContainer;
