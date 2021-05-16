import react from "react";

function List() {
    const persons = ['a', 'b', 'c', 'd', 'r']

    return (
        <div>
            {
                persons.map((person) => {
                    return (
                        <h1>{person}</h1>
                    )
                })
            }
        </div>
    )
}
export default List;