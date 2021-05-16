
import react,{Component} from "react";

class SubScriber extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text:"Please Subscrive us"
        }
    }
    changeText(){
        this.setState({
            text:"Thank You for Subscribe"
        })
    }
    
    render(){
        return (
            <div>
                 <h3>{this.state.text}</h3>
                 <button onClick={()=>this.changeText()}>Change text</button>
            </div>
            
        )
    }
}

export default SubScriber;