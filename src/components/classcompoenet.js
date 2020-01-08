import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        // return <h1>welcome</h1>
        return (
            <div>
                <h1>welcome {this.props.name}</h1>
            </div>
        )
    }
}

export default Welcome