import React, {useState, useRef, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import uuid4 from 'uuid/v4';
import './App.css';
import Header from './Header';
import Form from "./Form";
import Footer from './Footer'

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
            // eslint-disable-next-line no-undef
            return [...prevTodos, {id: uuid4(), name: name, complete: false}]
        })
        todoNameRef.current.value = null
    }

    function handleClearTodos() {
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }


    return (

        <div className="app">
            <Header/>

            <div className="container-md ">
                <div className="row pt-4 btn d-flex justify-content-center">
                    <input ref={todoNameRef} type="text"/>
                    <button className="btn btn-outline-info ml-4" onClick={handleAddTodo}>Add Todo</button>
                    <button className="btn btn-outline-danger ml-4" onClick={handleClearTodos}>Clear Complete</button>
                </div>

                <div className="row d-flex justify-content-center">
                    <Form todos={todos} toggleTodo={toggleTodo}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default App;