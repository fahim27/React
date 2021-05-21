import React, { useState } from 'react'

export default function HooksWithObject() {

    const [info, setInfo] = useState({
        name: "",
        id: ""
    })
    return (
        <div>
            <form>
                <input type="text" value={info.name} onChange={(e) => setInfo({ ...info, name: e.target.value })} />
                <input type="text" value={info.id} onChange={(e) => setInfo({ ...info, id: e.target.value })} />
            </form>
            <h2>Name is:{info.name}</h2>
            <h2>ID is:{info.id}</h2>
        </div>
    )
}
