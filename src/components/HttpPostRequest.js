import React, { Component } from 'react'
import axios from 'axios'

class HttpPostRequest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    changehandler = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    render() {
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="userId" value={userId} onChange={this.changehandler} />
                    <input type="text" name="title" value={title} onChange={this.changehandler} />
                    <input type="text" name="body" value={body} onChange={this.changehandler} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default HttpPostRequest
