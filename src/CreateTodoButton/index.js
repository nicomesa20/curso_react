import React from "react";
import './CreateTodoButton.css';


function CreateTodoButton() {

    const onTaskCreated = () => {

    }

    return (
        <button
            className="CreateTodoButton"
            onClick={onTaskCreated}
        >+</button>
    )
}
export { CreateTodoButton }