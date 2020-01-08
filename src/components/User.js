import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: false
        }
    }
    
    render() {
        // short circut operator ////
            return this.state.isLoggedin &&  <div><h1>Welocme Parthu</h1></div>
        //ternary contional operator //////
            return(
                this.state.isLoggedin ? 
                <div><h1>Welocme Parthu</h1></div> :
                <div><h1>Welocme Guest</h1></div>
            )
        // ellement variable approach////
            // let message
            // if(this.state.isLoggedin){
            //     message = <div><h1>Welocme Parthu</h1></div>
            // }
            // else{
            //     message = <div><h1>Welocme Guest</h1></div>
            // }

            // return <div>{message}</div>
        
        // if and else statment method //
            // if(this.state.isLoggedin){
            //     return (
            //         <div><h1>Welocme Parthu</h1></div>
            //     )
            // }
            // else{
            //     return(
            //         <div><h1>Welocme Guest</h1></div>
            //     )
            // }
        // return (
        //     <div>
        //         <h1>Welocme Parthu</h1>
        //         <h1>Welocme Guest</h1>
        //     </div>
        // )
    }
}

export default User
