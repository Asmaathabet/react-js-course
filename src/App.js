import React from 'react';

import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greet name="Asmaa"  username="asmaa"><p1> Welcome !</p1> </Greet>
      <Greet name="Eman" username="eman" ><p1> Welcome !</p1></Greet>
      <Greet name="Alaa" username="alaa" ><p1> Welcome !</p1></Greet>
      {/* <Welcome />
      <Hello /> */}
    </div>
  );
}

export default App;
