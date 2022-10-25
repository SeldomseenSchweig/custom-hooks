import React from 'react';
import logo from './logo.svg';
import MoodClicker from './MoodClicker';
import './App.css';
import Counter from './Counter';
import ColorPicker from './ColorPicker';

function App() {
  return (
    <div className="App">
      <Counter />
      <MoodClicker />
      <ColorPicker />

    </div>
  );
}

export default App;
