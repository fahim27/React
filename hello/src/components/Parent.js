import React, { Component } from 'react'
import Child from './Child';
export default class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:"User"
        }
        this.greetingMessage=this.greetingMessage.bind(this);
    }

    greetingMessage(abc){
        alert("hellow "+abc)
    }
    
    render() {
        return (
            <div>
                <h2>Parent Comnent</h2>
                <Child greetings={this.greetingMessage}></Child>
            </div>
        )
    }
}
