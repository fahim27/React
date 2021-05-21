import React, { useState,useEffect } from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title=`Title is ${count}`;
    })
    return (
        <div>
            <h1>Count is :{count} </h1>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
    )
}
