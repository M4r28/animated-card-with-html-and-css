import React from 'react';
import './App.css';
import villagePic from './pics/villagePic.jpg';
import random1 from './pics/random1.jpg';
import random2 from './pics/random2.jpg';
import random3 from './pics/random3.jpg';


function App() {
// const urlStreamers = 'https://source.unsplash.com/random/portraits/women'

  return (
    <div className="App">
      <div className="game">
        <div className="rank">3</div>
        <div className="front">
          <img src={villagePic} alt=""/>  
          <h3 className="name">Game name</h3>    
          <div className="stats">
            <p className="viewers">539.9k</p>
            <div className="streamers">
              <img src={random1} alt=""/>
              <img src={random2} alt=""/>
              <img src={random3} alt=""/>
            </div>
        </div>
        </div>
        <div className="back"></div>
      </div>
    </div>
  );
}

export default App;
