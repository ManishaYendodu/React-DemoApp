import React, { Component } from 'react'
import HOComponent from './HOC'

class HigerOrderClickCounter extends Component {

    render() {
        const { count, inceamentCount} = this.props
        return (
            <div>
    <button onClick={inceamentCount}> {this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default HOComponent(HigerOrderClickCounter, 4)
