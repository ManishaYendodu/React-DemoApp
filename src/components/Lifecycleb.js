import React, { Component } from 'react'

class Lifecycleb extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'poornima'
        }
        console.log('lifecycleb cunstructor')
    }
    
    static getDerivedStateFromProps(state, props){
        console.log('lifecycleb Static state')
        return null
    }

    componentDidMount(){
        console.log('lifecycleb mount method')
    }

    shouldComponentUpdate(){
        console.log('lifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null 
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('lifecycleB mountupdatemethod')
    }

    render() {
        console.log('lifecycleb render')
        return (
            <div>
                <h1>lifecycleb</h1>
            </div>
        )
    }
}

export default Lifecycleb
