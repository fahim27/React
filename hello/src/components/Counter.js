import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            number:0
        }
    }
    increament(){
        this.setState({
            number:this.state.number+1
        })
    }
    
    render() {
        return (
            <div>
                <p>Number Is :{this.state.number}</p>
            <button> onClick={()=>this.increament()}+</button>
            </div>
        )
    }
}
