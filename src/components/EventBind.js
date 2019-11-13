import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }
    }
    clickHandler() {
        this.setState({
            message : 'Goodbye !'
        })
    }
    render() {
        
        return (
            <div>
                <div>{this.state.message }</div>
                {/* this will not work and this => undefined */}
                <button onClick={this.clickHandler}> Click</button>
            </div>
        )
    }
}

export default EventBind
