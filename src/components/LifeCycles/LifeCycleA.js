import React, { Component } from 'react'

class LifeCycleA extends Component {
    // happened -1-
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Asmaa'
        }
        console.log('LifeCycle A Constructor');
    }
    // happened -2-
     static getDerivedStateFromProps(props, state){
         console.log('LifeCycle A getDerivedStateFromProps');
         return null ;
     }
     // happened -4-
     componentDidMount() {
        console.log('LifeCycleA componentDidMount');
     }
     // happened -3-
    render() {
        console.log('LifeCycleA render');
        return (
            <div>
               LifeCycleA  
            </div>
        )
    }
}

export default LifeCycleA
