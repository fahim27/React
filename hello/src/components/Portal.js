import React from 'react';
import ReactDOM from 'react-dom';
const Portal = () =>{
    return ReactDOM.createPortal(
        <div>Portal</div>,document.getElementById('root-2')
    )
}

export default Portal