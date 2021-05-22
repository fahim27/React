import React, { useState, useEffect } from 'react'

export default function UseEffectOneTime() {

    const [x, setx] = useState(0)
    const [y, sety] = useState(0)

    const setMous = (e) => {
        console.log('setmouse')
        setx(e.clientX)
        sety(e.clientY)
    }
    useEffect(() => {
        console.log('useeffect')

        window.addEventListener('mousemove', setMous)
    }, [])

    return (
        <div>
            <h1> Mouse x point is {x} </h1>
            <h1> Mouse y point is {y} </h1>
        </div>
    )
}
