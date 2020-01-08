import React, { Component } from 'react';

class Message extends Component {
    constructor (){
        super()
        this.state = {
            message: 'welocme vistor'
        }
    }
    changeMessage() {
        this.setState({
            message: 'thank u for subsribing'
        })
    }
    render() {
        // return <h1>welcome</h1>
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message