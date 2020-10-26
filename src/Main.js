import React from 'react'


export default function Todo({todo, toggleTodo}) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (

        <div className="container-md d-flex justify-content-center pb-2 text-secondary border-info mt-2">
            <div className="row">
                <label className="mt-2">
                    <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>&nbsp;&nbsp;
                    {todo.name}
                </label>
                <br/>
            </div>
        </div>


    )
}
