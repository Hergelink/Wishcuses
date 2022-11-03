import React from 'react';

import copyIcon from '../assets/copyIcon.svg';
function ExcuseContainer({value, setValue, fetchData, excuse, copied, setCopied}) {
  return (
    <div className='excuseContainer'>
      <div className='emojiContainer'>
        {value === 'party' ? '🎉' : value === 'office' ? '💼' : '👪'}
      </div>
      <label htmlFor='excuse'>
        <select
          onChange={(e) => setValue(e.target.value)}
          name='excuse'
          id='excuse'
        >
          <option value='family'>Family Gathering Excuse</option>
          <option value='office'>Office Excuse</option>
          <option value='party'>Party Excuse</option>
        </select>
      </label>

      <button id='fetchButton' onClick={fetchData}>
        Generate Excuse
      </button>
      <div
        className='generatedExcuseCotainer'
        onClick={(e) => {
          // navigator.clipboard.writeText(e.target.innerText);
          navigator.clipboard.writeText(excuse);

          setCopied(true);

          setTimeout(() => {
            setCopied(false);
          }, 5000);
        }}
      >
        <p className='generatedExcuse'>{excuse}</p>
        {copied && <p className='copyPopUp'>Text Copied!</p>}
      </div>
      <button
        className='copyButton'
        onClick={() => {
          navigator.clipboard.writeText(excuse);

          setCopied(true);

          setTimeout(() => {
            setCopied(false);
          }, 5000);
        }}
      >
        <img src={copyIcon} />
      </button>
    </div>
  );
}

export default ExcuseContainer;
