import React from 'react'
import Main from "./Main";


 function TodoList({ todos, toggleTodo }) {
    return (
        todos.map(todo => {
            return <Main key={todo.id} toggleTodo={toggleTodo} todo={todo} />
        })
    )
}


export default TodoList;