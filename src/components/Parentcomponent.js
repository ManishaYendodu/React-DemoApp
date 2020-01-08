import React, { Component } from 'react';
import Childcomponent from '../components/Childcomponent';

export class Parentcomponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(childName){
        alert(`hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                <Childcomponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default Parentcomponent
