import React , { Component } from 'react'; 

// class Welcome extends Component {
//     render (){
//         return (
//         <div>
//             <h1> 
//                 Hello  {this.props.name} a.k.a {this.props.username} 
//             </h1>
//             {this.props.children}
//         </div>
//         ) }
// }

class Welcome extends Component {
    render (){
        const {name, username, children} = this.props; 
        // const {state1, state2} = this.state; 
        return (
        <div>
            <h1> 
                Hello  {name} a.k.a {username} 
            </h1>
            {children}
        </div>
        ) }
}
export default Welcome;