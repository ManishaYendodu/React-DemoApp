import React from 'react'

function Childcomponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default Childcomponent