import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn :true
        }
    }
    
    render() {
/********************************  Condtional Rendering *****************************/ 

        // Fourth Aprroach - short circuit operator
        return this.state.isLoggedIn && <div> Welcome Asmaa</div>

       // Third Approach - Ternary Operator Conditional Approach 
        // return (
        //     this.state.isLoggedIn ?
        //     <div> Welcome Asmaa</div> :
        //     <div> Welcome Guest</div> 
        // )

        // Second Aprroach - element Variable
        // let message;
        // if (this.state.isLoggedIn) {
        //     message = <div> Welcome Asmaa</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // First Approach  - if/else operator 
        // if (this.state.isLoggedIn){
        //     return (
        //     <div>
        //         <div>Welcome Asmaa </div>  
        //     </div>
        //     )
        // }
        // else { 
        //     return (
        //         <div>
        //             <div>Welcome Guest </div>  
        //         </div>
        //         )
        // }
        // return (
        //     <div>
        //         <div>Welcome Asmaa </div>  
        //         <div>Welcome guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
