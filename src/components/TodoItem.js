import React from "react";
import '../styles/TodoItem.css';

function TodoItem(props) {

    const onTaskCompleted = () => { };
    const onTaskDeleted = () => { };

    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onTaskCompleted}>
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span
                className="Icon Icon-delete"
                onClick={onTaskDeleted}>
                X
            </span>
        </li>
    )
}

export { TodoItem }