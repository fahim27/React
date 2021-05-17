import React, { Component } from 'react'

export default class Comb extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             number:this.props.data
        }
    }
    
    static getDerivedStateFromProps(props,state){
        return{
            number:props.data*10
        }

    }
    render() {
        return (
            <div>
                component b
                <h1>Component B is:{this.state.number}</h1>
            </div>
        )
    }
}
