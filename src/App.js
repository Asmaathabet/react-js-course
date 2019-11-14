import React from 'react';

// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
import UserGreeting from './components/UserGreeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserGreeting />
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick />
      <Counter />
      <Greet name="Asmaa"  username="asmaa"><p1> Welcome !</p1> </Greet>
      <Greet name="Eman" username="eman" ><p1> Welcome !</p1></Greet>
      <Greet name="Alaa" username="alaa" ><button> click here </button></Greet>
      <Welcome name="Salma"  username="salma100" > <h1>Hi from Class</h1> </Welcome>
      <Hello />
      <Message /> */}
    </div>
  );
}

export default App;
