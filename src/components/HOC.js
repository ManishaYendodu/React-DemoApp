import React from 'react';

const HOComponent = (OriginalComponent, IncreamentNumber) => {
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        
        clickHandler = () => {
            this.setState(prevState => {
                return { count: prevState.count + IncreamentNumber}
            })
        }
        render(){
            console.log(this.props.name)
            return (
                <OriginalComponent count={this.state.count} inceamentCount={this.clickHandler} {...this.props}/>
            )
        }
    }
    return NewComponent
}

export default HOComponent