import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [excuse, setExcuse] = useState('');
  const [value, setValue] = useState('');

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
        <div className='generatedExcuseCotainer'>
          <p className='generatedExcuse'>{excuse}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
