import React from 'react';

import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greet name="Asmaa"  username="asmaa" />
      <Greet name="Eman" username="eman" />
      <Greet name="Alaa" username="alaa" />
      {/* <Welcome />
      <Hello /> */}
    </div>
  );
}

export default App;
