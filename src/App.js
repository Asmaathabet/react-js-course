import React from 'react';

import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
    </div>
  );
}

export default App;
