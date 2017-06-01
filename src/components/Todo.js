import React from "react";

const Todo = ( { onClick, text, id } ) => (
    <li className="todo"
        onClick={ onClick }
    >
        { text }
        <button onClick={ onClick }>Delete</button>
    </li>
);

export default Todo;
