import React from 'react';

const Hello = () =>{
    // return (
    //     //JSX
    //     <div>
    //         <h1> Hello from JSX Explanation</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
         {id: 'hello', class: 'dummyClass'}, // Attributes 
         React.createElement( 'h1', null, 'Hello from JSX !'))
}

export default Hello; 
