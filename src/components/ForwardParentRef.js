import React, { Component } from 'react'
import ForwardingRef from './ForwardingRef'

class ForwardParentRef extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <ForwardingRef ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Input Parent</button>
            </div>
        )
    }
}

export default ForwardParentRef
