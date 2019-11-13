import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    incrementOne(){
        // setState => Asynchronous so the value in the console less than the value in state
        // this.setState({
        // count: this.state.count +1
        // }, 
        // ()=> console.log('Callback Value', this.state.count) )
        this.setState(prevState => ({
            count: prevState.count + 1
            }))  
        console.log(this.state.count)  

      // if you want to use props with prev value 
        // this.setState((prevState, props) => ({
        //     count: prevState.count + props.addValue 
        //     }))  
        // console.log(this.state.count)  
    }

    incrementFive(){
        this.incrementOne();
        this.incrementOne();
        this.incrementOne();
        this.incrementOne();
        this.incrementOne();
       
    }
    
    render() {
        return (
            <div>
                <div>
                    Count - {this.state.count}
                </div>
                <button onClick={() => this.incrementFive()}> Increment</button>
            </div>
        )
    }
}

export default Counter
