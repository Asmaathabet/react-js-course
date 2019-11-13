import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }
     // Approach 3   
    // using binding the constructor better than using it in Rendering . why?
    // because it happened once  [most Recommended]

        // this.clickHandler = this.clickHandler.bind(this);
    }
    // clickHandler() {
    //     this.setState({
    //         message : 'Goodbye !'
    //     })
    //     console.log(this);
    // }


    // Aprroach 4  -Using Arrow function property
    clickHandler = () => {
        this.setState({
            message : 'Goodbye !'
        }) 
    }

    render() {
        
        return (
            <div>
                <div>{this.state.message }</div>
                {/* this will not work and this => undefined */}
                {/* <button onClick={this.clickHandler}> Click</button>  */}
                {/* The  Approach  1  for binding */}
                {/* <button onClick={this.clickHandler.bind(this)}> Click</button> */}
                {/* The Approach 2  by using arrow function  */}
                {/* <button onClick={() => this.clickHandler()}> Click</button> */}
                {/* The Approach 3 and it found in the React documentation => add to constructor */}
                <button onClick={this.clickHandler}> Click</button>
            </div>
        )
    }
}

export default EventBind
