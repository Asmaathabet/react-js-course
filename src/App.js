import React from 'react';

// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import StyleSheet from './components/StyleSheet';
// import Inline from './components/Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css'
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className="App">
    
      <Form />
      {/* it works for all childern component - regular StyleSheet */}
      {/* <h1 className="error"> Error </h1> */}
       {/* XXX it doesn't work for all children components   */}
      {/* <h1 className={styles.success}> Success </h1> */}
      {/* <Inline /> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
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
