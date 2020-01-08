import React, { Component } from 'react'

class EorrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    

    static getDerivedStateFromError(Error){
        return {
            hasError: true
        }

    }

    componentDidCatch(Error, info){
        console.log(Error)
        console.log(info)
    }
    render() {
        if(this.state.hasError) {
            return <h1>Something went Wrong</h1>
        }
        return this.props.children
    }
}

export default EorrorBoundary
