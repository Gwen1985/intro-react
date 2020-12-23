import React from 'react'
import './Main.css';


// function Todo({todo, toggleTodo}) {
//     function handleTodoClick() {
//         toggleTodo(todo.id)
//     }

const Todo = ({todo, toggleTodo}) => {
    function handleTodoClick() {
      return  toggleTodo(todo.id)
    }



    return (

        <div className="container-md" id="todoBox">
            <div className="row">
                <label className="">
                    <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>&nbsp;&nbsp;
                    {todo.name}
                </label>
                <br/>
            </div>
        </div>


    )
}

export default Todo;