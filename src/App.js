import React from 'react';
import './App.css';
import './Stylesheet/style.css'

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import MainComponent from './components/MainComponent/MainComponent';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <div className="wrapper">
        <MainComponent/>
      </div>    
    </div>
  );
}

export default App;
