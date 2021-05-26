import React from 'react'
import {Link} from 'react-router-dom';
export default function Navbar() {
    return (
        <div className="nav">
            <div className="logo">
                <Link to="/">
                <h1>LOGO</h1></Link>
            </div>
            <div className="link">
                <Link to="/" >Home</Link>
                <Link to="/about">About</Link>
                <Link to="/post">Post</Link>
            </div>
        </div>
    )
}
