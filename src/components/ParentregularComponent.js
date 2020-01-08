import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComp'
import MemoComp from './MemoComp'


class ParentregularComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'poornima'
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'poornima'
            })
        }, 2000)
    }

    render() {
        console.log('parent component')
        return (
            <div>
                parent Component
                {/* <RegularComponent name={this.state.name}></RegularComponent>
                <PureComp name={this.state.name}></PureComp> */}
                <MemoComp name={this.state.name}></MemoComp>
            </div>
        )
    }
}

export default ParentregularComponent
