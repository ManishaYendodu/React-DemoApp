import React from 'react'

function Nameslist() {
    const names = ['poornima', 'raju', 'pragna', 'shubh']
    const Nameslist =  names.map(name => <h1>{name}</h1>)
    return (
        <div>
            {
                Nameslist
                // names.map(name => <h1>{name}</h1>)
            }
        </div>
    )
}

export default Nameslist
