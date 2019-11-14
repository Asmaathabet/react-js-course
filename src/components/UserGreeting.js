import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn :false
        }
    }
    
    render() {
        if (this.state.isLoggedIn){
            return (
            <div>
                <div>Welcome Asmaa </div>  
            </div>
            )
        }
        else { 
            return (
                <div>
                    <div>Welcome Guest </div>  
                </div>
                )
        }
        // return (
        //     <div>
        //         <div>Welcome Asmaa </div>  
        //         <div>Welcome guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
