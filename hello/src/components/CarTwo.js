import React, { Component } from 'react'

class CarTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:"Hellow Woorld"
        }
    }
    

    render() {

        const {brand,color} =this.props;
        const {msg} =this.state;
        return (
            <div>
        <h1>Brand is: {brand} and color is {color} </h1>
        <h4>This is Text is :{msg}</h4>
            </div>
        )
    }
}
export default CarTwo;
