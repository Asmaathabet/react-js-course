import React from 'react';

const Hello = () =>{
    //   with JSX [make code Readable , it will change the following code to React.createElement]
    // return (
    //     <div className='dummyClass'>
    //         <h1> Hello from JSX Explanation</h1>
    //     </div>
    // )
 
    // without JSX
    return React.createElement(
        'div',
         {id: 'hello', className: 'dummyClass'}, // Attributes 
         React.createElement( 'h1', null, 'Hello from JSX !'))
}

export default Hello; 
