import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import rightArrow from './assets/rightArrow.svg';
import copyIcon from './assets/copyIcon.svg';

function App() {
  const [excuse, setExcuse] = useState('');
  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);

  const fetchFamilyExcuse = () => {
    Axios.get('https://excuser.herokuapp.com/v1/excuse/family/').then((res) => {
      setExcuse(res.data[0]?.excuse);
    });
  };
  const fetchOfficeExcuse = () => {
    Axios.get('https://excuser.herokuapp.com/v1/excuse/office/').then((res) => {
      setExcuse(res.data[0]?.excuse);
    });
  };
  const fetchPartyExcuse = () => {
    Axios.get('https://excuser.herokuapp.com/v1/excuse/party/').then((res) => {
      setExcuse(res.data[0]?.excuse);
    });
  };

  const fetchData = () => {
    return value === 'office'
      ? fetchOfficeExcuse()
      : value === 'family'
      ? fetchFamilyExcuse()
      : fetchPartyExcuse();
  };

  useEffect(() => {
    fetchData();
    // fetchFamilyExcuse();
    // fetchOfficeExcuse();
    // fetchPartyExcuse();
  }, [value]);

  return (
    <div className='App'>
      <header>
        <div className='circle'>
          <h1>Excuse Generator</h1>
          <span className='logo'>🧰</span>
        </div>
      </header>
      <main>
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
              //  navigator.clipboard.writeText(window.location.href);
              navigator.clipboard.writeText(e.target.innerText);

              setCopied(true);

              setTimeout(() => {
                setCopied(false);
              }, 3000);
            }}
          >
            <p className='generatedExcuse'>{excuse}</p>
            {copied && <p className='copyPopUp'>Text Copied!</p>}
          </div>
          <button className='copyButton'><img src={copyIcon} /></button>
        </div>
      </main>
      <div className='styleDiv'>
        <div className='styleCircle'></div>
      </div>
      <div className='dummy'></div>
      <footer>
        <p>
          Created by
          <a href='https://github.com/Hergelink' target='_blank'>
            Hergelink
          </a>
        </p>
        <p className='suitEmoji'>🕴️</p>
      </footer>
    </div>
  );
}

export default App;
