import React from 'react'; 

// function Greet(){
//     return <h1> Hello From React !</h1>
// }

const Greet = (props) => {
return (    
    // a.k.a => also known as
<h1> Hello {props.name} a.k.a  {props.username} </h1>
)
} 

export default Greet;
