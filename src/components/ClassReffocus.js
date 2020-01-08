import React, { Component } from 'react'
import ClassRefinput from './ClassRefinput'

class ClassReffocus extends Component {
    constructor(props) {
        super(props)
        this.ComponentRef = React.createRef()
    }
    clickHandler = () => {
        this.ComponentRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <ClassRefinput ref={this.ComponentRef}/>
                <button onClick={this.clickHandler}>Fcous Input </button>
            </div>
        )
    }
}

export default ClassReffocus
