import React from "react";

const WithCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                counter: 0
            }
            this.count = this.count.bind(this)
        }
        count() {
            this.setState({
                counter: this.state.counter + 1
            })
        }

        render() {
            return (
                <OriginalComponent counter={this.state.counter} count={this.count}></OriginalComponent>
            )
        }
    }
    return NewComponent;
}

export default WithCounter;