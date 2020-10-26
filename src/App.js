import React, {useState, useRef, useEffect} from 'react';
import Form from "./Form";
import uuidv4 from 'uuid/v4'


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
    const [todos, setTodos] = useState([])
    const todoNameRef = useRef()

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function toggleTodo(id) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    function handleAddTodo(e) {
        const name = todoNameRef.current.value
        if (name === '') return
        setTodos(prevTodos => {
            return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
        })
        todoNameRef.current.value = null
    }

    function handleClearTodos() {
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }

    return (

        <>
            <header className="container-md bg bg-warning text-info ">
                <div className="row pt-4 mt-4">
                    <h1>G.WebDev's Todo App</h1>
                </div>
            </header>

            <div className="container-md ">
                <div className="row pt-4 btn d-flex justify-content-center">
                    <input ref={todoNameRef} type="text"/>
                    <button className="btn btn-outline-info ml-4"  onClick={handleAddTodo}>Add Todo</button>
                    <button className="btn btn-outline-danger ml-4" onClick={handleClearTodos}>Clear Complete</button>
                </div>

                <div className="row bg-light d-flex justify-content-center">
                        <Form todos={todos} toggleTodo={toggleTodo}/>
                    <div>{todos.filter(todo => !todo.complete).length} left to do</div>
                </div>
            </div>


            <footer className="container-md bg bg-warning text-info">

                <div className="row d-flex justify-content-center">
                    <div className="">
                        <p className="text-info pt-2">G.WebDev</p>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default App;