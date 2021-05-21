import React, { Component } from 'react'
import {UserCosumer} from "./context"
export default class C extends Component {
    render() {
        return (

            <UserCosumer>
                {(value) => {
                    return <h2>Component is C & Name is: {value}</h2>

                }}
            </UserCosumer>

        )
    }
}
