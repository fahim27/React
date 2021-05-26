
import React, { Component } from 'react'

export default class clickCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter:0
        }
    }
    count(){
        this.setState({
            counter:this.state.counter+1
        })
    }
    
    render() {
        return (
            <div>
                <h2>Counter Value is :{this.state.counter}</h2>
                <button onClick={()=>this.count()}>Count</button>
            </div>
        )
    }
}
