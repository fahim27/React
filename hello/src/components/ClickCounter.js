
import React, { Component } from 'react'
import WithCounter from "./HOC/WithCounter";
 class clickCounter extends Component {
   
    
    render() {
        return (
            <div>
                <h2>Counter Value is :{this.props.counter}</h2>
                <button onClick={()=>this.props.count()}>Count</button>
            </div>
        )
    }
}

export default WithCounter(clickCounter)
