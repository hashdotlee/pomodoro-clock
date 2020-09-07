import React from 'react';
import './App.css';
import Break from './features/BreakComponent';
import Session from './features/SessionComponent';
import Display from './features/DisplayComponent';

function App() {
  return (
    <div className="App">
      <header>Pomodoro Clock</header>
      <audio id="beep" src='https://www.soundjay.com/button/sounds/button-2.mp3'></audio>
      <Break/>
      <Session/>
      <Display/>
    </div>
  );
}

export default App;
