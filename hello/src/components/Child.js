
import react from "react";

function Child (props){
    return(
        <h2 onClick={()=>props.greetings('abc')}>Child Component</h2>
    )
}

export default Child;