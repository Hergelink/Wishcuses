import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../styles/wishes.css';
import WishesHeader from '../components/wishes-components/WishesHeader';

import WishesLinkContainer from '../components/wishes-components/WishesLinkContainer';
import WishesFooter from '../components/wishes-components/WishesFooter';
import WishesInfoContainer from '../components/wishes-components/WishesInfoContainer';
import WishesContainer from '../components/wishes-components/WishesContainer';

function WishesPage() {
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
    <div>
      <WishesHeader />
      <main className='wishesMain'>
        <WishesInfoContainer />
        <WishesContainer
          excuse={excuse}
          setExcuse={setExcuse}
          value={value}
          setValue={setValue}
          copied={copied}
          setCopied={setCopied}
          fetchData={fetchData}
        />
      </main>
      <div className='wishesStyleDiv'>
        <div className='wishesStyleCircle'></div>
      </div>
      <div className='wishesStyleContainer'>
        <WishesLinkContainer />
      </div>

      <div className='wishesStyleDivSecond'>
        <div className='wishesStyleCircleSecond'></div>
      </div>
      <WishesFooter />
    </div>
  );
}

export default WishesPage;
