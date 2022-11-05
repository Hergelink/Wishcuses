import React from 'react';
import rightArrow from '../../assets/rightArrow.svg';

function WishesInfoContainer() {
  return (
    <div className='wishesInfoContainer'>
      <h2>
        Wishes made <span className='wishesHighlightText'>simple.</span>
      </h2>
      <h4
        style={{
          backgroundColor: 'black',
          color: 'red',
          padding: '3px',
          borderRadius: '3px',
        }}
      >
        Currently the right API is not connected!!!
      </h4>
      <h4>Generate wishes for different occasions fast & simple</h4>
      <ul className='wishesList'>
        <div className='wishesListItem'>
          <img src={rightArrow} fill='white' className='arrow' />
          <li>Wishes for Family Gatherings</li>
        </div>
        <div className='wishesListItem'>
          <img src={rightArrow} fill='white' className='arrow' />
          <li>Wishes for your Office</li>
        </div>
        <div className='wishesListItem'>
          <img src={rightArrow} fill='white' className='arrow' />
          <li>Wishes for Parties</li>
        </div>
      </ul>
    </div>
  );
}

export default WishesInfoContainer;
