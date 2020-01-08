import React, { Component } from 'react'

export class Cassclick extends Component {
    clickHanler(){
        console.log('button was clicked')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHanler}>Click me</button>
            </div>
        )
    }
}

export default Cassclick
