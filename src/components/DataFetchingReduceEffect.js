import React, {useState, useEffect, useReducer} from 'react'
import axios from 'axios'

const  initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'fetch_success':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'fetch_error':
            return {
                loading: true,
                post: {},
                error: 'something went wrong'
            }    
        default:
            return state
    }
}

function DataFetchingReduceEffect() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/post/1')
        .then(res => {
            dispatch({type: 'fetch_success', payload: res.data})
        })
        .catch(err => {
            dispatch({type: 'fetch_error'})
        })
    }, [])
    return (
        <div>
            {state.loading? 'loading' : state.post.title}
            {state.error? state.error : null}
        </div>
    )
}

export default DataFetchingReduceEffect
