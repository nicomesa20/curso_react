import React from "react";
import './CreateTodoButton.css';


function CreateTodoButton({ setOpenModal }) {

    const onTaskCreated = () => {
        setOpenModal(currentState => !currentState)
    }

    return (
        <button
            className="CreateTodoButton"
            onClick={onTaskCreated}
        >+</button>
    )
}
export { CreateTodoButton }