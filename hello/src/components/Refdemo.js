import React, { Component } from 'react';

class Refdemo extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        this.submitForm = this.submitForm.bind(this)
    }
    componentDidMount() {
        console.log(this.inputRef)
    }

    submitForm(e) {

        e.preventDefault();
        console.log(this.inputRef.current.value)
    }
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div>
                    <label>Input</label>
                    <input placeholder="Enter Some Data" ref={this.inputRef} />
                    <input placeholder="Enter Some Data" ref={this.inputRef} />

                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Refdemo;