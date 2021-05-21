import React, { useState } from 'react'

export default function HooksCounter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 10);
    }
    return (
        <div>
            <h1>Counter is:{count}</h1>
            <button onClick={() => increment()}>Increment</button>
            <h2>Hooks Component</h2>
        </div>
    )
}
