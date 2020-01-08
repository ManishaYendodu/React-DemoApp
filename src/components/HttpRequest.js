import React, { Component } from 'react';
import axios from 'axios'

class HttpRequest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMessage: []
        }
    }
    componentDidMount(){
        axios('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({posts: res.data});
        })
        .catch(err => {
            console.log(err)
            this.setState({errorMessage: 'Error retriving data'})
        })

    }
    render() {
        const {posts, errorMessage} = this.state
        return (
            <div>
                {
                    posts.length ?
                    posts.map(post => (

                        <div key={post.id}>
                            <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        </div>
                    )) :
                    null
                }
                {
                    errorMessage?
                    <div>{errorMessage}</div> :
                    null
                }
            </div>
        )
    }
}

export default HttpRequest
