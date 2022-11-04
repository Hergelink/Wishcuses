import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ExcusePage from './pages/ExcusePage';
import WishesPage from './pages/WishesPage';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      
        <Header />
        <Routes>
          <Route path ='/' element={<HomePage/>} />
          <Route path='/excuse-generator' element={<ExcusePage />}/>
          <Route path='/wishes-generator' element={<WishesPage />}/>
           
           {/* <WishesPage /> */}
        </Routes>
     
    </div>
  );
}

export default App;
