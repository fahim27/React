import { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            color: ""
        }
        this.nameChange = this.nameChange.bind(this)
        this.emailChange = this.emailChange.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
        this.colorChage = this.colorChage.bind(this)
    }

    nameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    emailChange(e) {
        this.setState({
            email: e.target.value
        })
    }
    formSubmit(event) {
        event.preventDefault()

        if (this.state.name.length <= 0) {
            alert("Name Can Not be Empty");
            return;
        }
        alert(`Name is ${this.state.name} and email is ${this.state.email} and color is ${this.state.color}`)

    }
    colorChage(e) {
        this.setState({
            color: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <div>
                        <label>Name</label>
                        <input type="text" onChange={this.nameChange} value={this.state.name} placeholder="Name" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" onChange={this.emailChange} placeholder="Email" value={this.state.email} />
                    </div>
                    <div>
                        <label>Color</label>
                        <select value={this.state.color} onChange={this.colorChage}>
                            <option value="red">red</option>
                            <option value="green">Green</option>

                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;