import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            topic: 'Angular'
        }
    }
    
    usernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    changeTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.topic}`)
        event.preventDefalut()
    }

    render() {
        const {username, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" value={username} onChange={this.usernameChange} />
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.changeTopic}>
                        <option value="angular">Angular</option>
                        <option value="react">react</option>
                        <option value="node">node</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
           
        )
    }
}

export default Form
