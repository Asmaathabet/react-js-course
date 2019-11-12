import React from 'react'; 

// function Greet(){
//     return <h1> Hello From React !</h1>
// }

const Greet = (props) => {
    // props is immutable => can't be assign or take another value
return (    
    // a.k.a => also known as
    <div>
        <h1> 
            Hello {props.name} a.k.a  {props.username} 
        </h1>
        {props.children}
    </div>
)
} 

export default Greet;
