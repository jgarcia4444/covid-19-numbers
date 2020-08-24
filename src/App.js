import React from 'react';
import './App.css';
import BannerContainer from './components/BannerContainer';
import Nav from './components/Nav';
import USTotalCardContainer from './components/USTotalCardContainer';

function App() {
  return (
    <div>
      <Nav />
      <BannerContainer />
      <USTotalCardContainer />
    </div>
  );
}

export default App;
