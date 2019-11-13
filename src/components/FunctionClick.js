import React from 'react'

function FunctionClick() {
  
    const clickHandler = () => {
        console.log('button clicked');
    }
    // Event Handler used without parenthese 
    // don't onClick={clickHandler()} => it will execute one time before pressing 
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
