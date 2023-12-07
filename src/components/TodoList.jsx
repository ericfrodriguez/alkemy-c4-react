// import React from "react";
// importaciones de librerias a utilizar
import '../styles/TodoList.css';

function TodoList() {

    // const listStyles = {
    //     backgroundColor: 'red',
    //     margin: '10px'
    // }

    // const taskStyles = {
    //     textDecoration: 'line-through'
    // }

    return (
        <ul className='list'>
            <li>Task 1</li>
            <li className='todo-done'>Task 2</li>
            <li>Task 3</li>
        </ul>
    )
}

export default TodoList;