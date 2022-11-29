import React, { useState} from 'react';
import { Configuration, OpenAIApi } from 'openai';
import '../styles/wishes.css';
import WishesHeader from '../components/wishes-components/WishesHeader';
import WishesLinkContainer from '../components/wishes-components/WishesLinkContainer';
import WishesFooter from '../components/wishes-components/WishesFooter';
import WishesInfoContainer from '../components/wishes-components/WishesInfoContainer';
import WishesContainer from '../components/wishes-components/WishesContainer';


function WishesPage() {
  const [generatedWish, setGeneratedWish] = useState('');
  const [userPromt, setUserPromt] = useState('')
  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);
 

  // Open ai states
  
  
  const [temp, setTemp] = useState(1);
  const [loading, setLoading] = useState(false);

  // open ai init
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    
    // OPEN AI-START

    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    await openai
      .createCompletion({
        model: 'text-davinci-002',
        prompt: `Create a sincere, kind wish for:${userPromt} in context of ${value}`,
        temperature: temp,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response) => {
        setGeneratedWish(response.data.choices[0].text);
      });

    // OPEN AI-END
    setLoading(false);
  };

  return (
    <div>
      <WishesHeader />
      <main className='wishesMain'>
        <WishesInfoContainer />
        <WishesContainer
          generatedWish={generatedWish}
          setGeneratedWish={setGeneratedWish}
          value={value}
          setValue={setValue}
          copied={copied}
          setCopied={setCopied}
          handleSubmit={handleSubmit}
          setUserPromt={setUserPromt}
          temp={temp}
          setTemp={setTemp}
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
