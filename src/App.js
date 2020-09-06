import React from 'react';
import './App.css';
import Break from './features/BreakComponent';
import Session from './features/SessionComponent';
import Display from './features/DisplayComponent';

function App() {
  return (
    <div className="App">
      <Break/>
      <Session/>
      <Display/>
    </div>
  );
}

export default App;
