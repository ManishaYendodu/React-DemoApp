import React, { Component } from 'react'

export class Eventbind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'please click below button to change me'
        }

        // this.changeHandler = this.changeHandler.bind(this)
    }

    // changeHandler(){
    //     this.setState({
    //         message: 'Status Changed'
    //     })
    // }

    changeHandler = () => {
        this.setState({
            message: 'status changed'
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* handing bind events */}
                {/* <button onClick={this.changeHandler.bind(this)}>click out here to change the above statement</button> */}
                {/* <button onClick={() => this.changeHandler()}>click out here to change the above statement</button> */}
                <button onClick={this.changeHandler}>click out here to change the above statement</button>
            </div>
        )
    }
}

export default Eventbind
