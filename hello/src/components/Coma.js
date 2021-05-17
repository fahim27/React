
import React, { Component } from 'react'
import Comb from './Comb'

export default class Coma extends Component {
    constructor(props) {
        super(props)

        this.state = {
            number: 0
        }
    }
    increment() {
        this.setState({
            number: this.state.number+1
        })
    }
    render() {
        return (
            <div>
                <h2>Number is :{this.state.number}</h2>
                <button onClick={() => this.increment()}> Increment</button>

                <Comb data={this.state.number}></Comb>
            </div>
        )
    }
}
