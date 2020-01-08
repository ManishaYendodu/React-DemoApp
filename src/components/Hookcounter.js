import React, {useState} from 'react'

function Hookcounter() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const increamentFive = () => {
        for(let i=0; i<5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increament</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decreament</button>
            <button onClick={increamentFive}>Inecreament 5</button>
        </div>
    )
}

export default Hookcounter
