import React from 'react';
import './App.css';
import BannerContainer from './components/BannerContainer';
import Nav from './components/Nav';
import USTotalCardContainer from './components/USTotalCardContainer';
import StateCardContainer from './components/StateCardContainer';

function App() {
  return (
    <div>
      <Nav />
      <BannerContainer />
      <USTotalCardContainer />
      <StateCardContainer />
    </div>
  );
}

export default App;
