import react from "react";

function Car(props){

    const {brand,color}=props;

    return(
        <h1>Brand is: {brand} and color is {color} </h1>
    )
}

export default Car;