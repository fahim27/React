
import React, { Component } from 'react'
import WithCounter from  "./HOC/WithCounter";

class HoverCounter extends Component {


    render() {
        return (
            <div>
                <h1>Hover Counter</h1>
                <h2>Counter Value is :{this.props.counter}</h2>
                <button onMouseOver={() => this.props.count()}>Count</button>
            </div>
        )
    }
}

export default WithCounter(HoverCounter);
