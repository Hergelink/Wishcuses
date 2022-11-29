import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import '../styles/excuse.css';
import ExcuseHeader from '../components/excuse-components/ExcuseHeader';
import ExcuseLinkContainer from '../components/excuse-components/ExcuseLinkContainer';
import ExcuseFooter from '../components/excuse-components/ExcuseFooter';
import ExcuseInfoContainer from '../components/excuse-components/ExcuseInfoContainer';
import ExcuseContainer from '../components/excuse-components/ExcuseContainer';

function ExcusePage() {
  const [generatedExcuse, setGeneratedExcuse] = useState('');
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
          prompt: `Create a excuse for:${userPromt} in context of ${value}`,
          temperature: temp,
          max_tokens: 200,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        })
        .then((response) => {
          setGeneratedExcuse(response.data.choices[0].text);
        });
  
      // OPEN AI-END
      setLoading(false);
    };


  

  return (
    <div>
      <ExcuseHeader />
      <main className='excuseMain'>
        <ExcuseInfoContainer />
        <ExcuseContainer
          generatedExcuse={generatedExcuse}
          setGeneratedExcuse={setGeneratedExcuse}
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
      <div className='excuseStyleDiv'>
        <div className='excuseStyleCircle'></div>
      </div>
      <div className='excuseStyleContainer'>
        <ExcuseLinkContainer />
      </div>

      <div className='excuseStyleDivSecond'>
        <div className='excuseStyleCircleSecond'></div>
      </div>
      <ExcuseFooter />
    </div>
  );
}

export default ExcusePage;
