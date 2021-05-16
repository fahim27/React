import React, { Component } from 'react'

export default class Condition extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: false
        }
    }

    render() {

        if (this.state.user) {
            return (
                <div>
                    User
                </div>
            )
        } else {
            return (
                <div>
                    Not User
                </div>
            )
        }

    }
}
