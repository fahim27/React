import React, {Component} from 'react';

class ClassComponent extends Component {
    render(){
        return (
            <div>
                <h3>class component</h3>
                <p>Age is :{this.props.age}</p>
            </div>
        )
    }
}
export default ClassComponent;