import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'
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
     
     shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate');
        return true; 
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate');
        return null;
        
    }
    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate');

     }
     changeState = () => {
         this.setState({
             name:'CodeEveolution'
         })
     }

     // happened -3-
    render() {
        console.log('LifeCycleA render');
        return (
            <div>
               LifeCycleA  
               <button onClick={this.changeState}>Change State</button>
               <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
