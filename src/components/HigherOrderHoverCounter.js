import React, { Component } from 'react'
import HOComponent from './HOC'

class HigherOrderHoverCounter extends Component {
    render() {
        const { count, inceamentCount } = this.props
        return (
            <div>
                <h2 onMouseOver={inceamentCount}>hover {count} times</h2>
            </div>
        )
    }
}

export default HOComponent(HigherOrderHoverCounter, 2)
