import React, { Component } from 'react'
import Lifecycleb from './Lifecycleb'


class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'poornima'
        }
        console.log('lifecycleA cunstructor')
    }
    
    static getDerivedStateFromProps(state, props){
        console.log('lifecycleA Static state')
        return null
    }

    componentDidMount(){
        console.log('lifecycleA mount method')
    }

    shouldComponentUpdate(){
        console.log('lifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('lifecycleA mountupdatemethod')
    }

    changeState = () => {
        this.setState({
            name: 'welcome'
        })
    }

    render() {
        console.log('lifecycleA render')
        return (
            <div>
                <h1>lifecycleA</h1>
                <button onClick={this.changeState}>Change State</button>
                <Lifecycleb />
            </div>
        )
    }
}

export default LifecycleA
