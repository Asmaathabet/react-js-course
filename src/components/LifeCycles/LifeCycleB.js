import React, { Component } from 'react'

class LifeCycleB extends Component {
    // happened -1-
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Asmaa'
        }
        console.log('LifeCycle B Constructor');
    }
    // happened -2-
     static getDerivedStateFromProps(props, state){
         console.log('LifeCycle B getDerivedStateFromProps');
         return null ;
     }
     // happened -4-
     componentDidMount() {
        console.log('LifeCycle B componentDidMount');
     }
     // happened -3-
    render() {
        console.log('LifeCycle B render');
        return (
            <div>
               LifeCycle B 
            </div>
        )
    }
}

export default LifeCycleB
