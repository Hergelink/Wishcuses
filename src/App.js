import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

import InfoContainer from './components/InfoContainer';
import ExcuseContainer from './components/ExcuseContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import LinkContainer from './components/LinkContainer';


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
  }, [value]);

  return (
    <div className='App'>
      <Header />
      <main>
        <InfoContainer />
        <ExcuseContainer
          value={value}
          setValue={setValue}
          fetchData={fetchData}
          excuse={excuse}
          copied={copied}
          setCopied={setCopied}
        />
      </main>
      <div className='styleDiv'>
        <div className='styleCircle'></div>
      </div>
      <div className='styleContainer'>
        <LinkContainer />
      </div>

      <div className='styleDivSecond'>
        <div className='styleCircleSecond'></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
