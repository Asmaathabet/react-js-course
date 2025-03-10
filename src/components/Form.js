import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             comments: '',
             topic: 'react'
        }
    }

    handleUsernameChange = event =>{
      this.setState({
          username: event.target.value
      })
    }

    handleCommentsChange = event =>{
        this.setState({
            comments: event.target.value
        })
      }

      handleTopic = event =>{
        this.setState({
            topic: event.target.value
        })
      }

      handleSubmit = event => {
          alert(` ${this.state.username} ${this.state.topic} ${this.state.comments}` )
          // to stop default refresh after submitting
          event.preventDefault();
      }
    
    render() {
        const {username, comments, topic } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                  <label>Username</label>
                  <input type='text' value={username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                  <label>Comments</label>
                  <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopic}>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                    </select>
                </div>
                <button type="submit" >Submit</button>
            </form>
        )
    }
}

export default Form
