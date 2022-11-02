import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [catFact, setCatFact] = useState('');
  const [name, setName] = useState(0);
  const [excuse, setExcuse] = useState('');

  const fetchCatFact = () => {
    Axios.get('https://catfact.ninja/fact').then((res) => {
      setCatFact(res.data.fact);
    });
  };
  const fetchAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setName(res.data.age);
    });
  };

  const fetchFamilyExcuse = () => {
    Axios.get('https://excuser.herokuapp.com/v1/excuse/family/').then((res) => {
      setExcuse(res.data[0].excuse);
    });
  };
  const fetchOfficeExcuse = () => {
    Axios.get('https://excuser.herokuapp.com/v1/excuse/office/').then((res) => {
      setExcuse(res.data[0].excuse);
    });
  };
  const fetchPartyExcuse = () => {
    Axios.get('https://excuser.herokuapp.com/v1/excuse/party/').then((res) => {
      setExcuse(res.data[0].excuse);
    });
  };

  useEffect(() => {
    fetchCatFact();
    fetchAge();
    fetchFamilyExcuse();
    fetchOfficeExcuse();
    fetchPartyExcuse();
  }, []);

  return (
    <div className='App'>
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
      <input
        type='text'
        placeholder='enter name'
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={fetchAge}>Guess Age</button>
      <p>{name}</p>
      <button onClick={fetchFamilyExcuse}>Excuse for Family</button>
      <button onClick={fetchOfficeExcuse}>Excuse for Office</button>
      <button onClick={fetchPartyExcuse}>Excuse for Party</button>
      <p>{excuse}</p>
    </div>
  );
}

export default App;
