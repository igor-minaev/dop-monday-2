import React, {useEffect, useState} from 'react';
import './App.css';
import {SuperButton} from "./components/SuperButton";
import {SuperInput} from "./components/SuperInput";

type TodosType = {
    completed: boolean
    id: number
    title: string
    userId: number
}

function App() {

    const [todos, setTodos] = useState<Array<TodosType>>([])
    const [newTitle, setNewTitle] = useState('')

    const myFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }
    useEffect(() => {
        myFetch()
    }, [])
    const showUpHandler = () => {
        myFetch()
    }

    const deleteHandler = () => {
        setTodos([])
    }

    const mappedTodos = todos.map(el => {
        return (
            <li key={el.id}>
                <input type="checkbox" checked={el.completed}/>
                <span>{el.id}</span>
                <span>{el.title}</span>
                <span>{el.userId}</span>
            </li>
        )
    })
    const addNewTitleHandler = () => {
        const newTodo = {
            completed: true,
            id: todos.length + 1,
            title: newTitle,
            userId: 100200
        }
        setTodos([newTodo, ...todos])
        setNewTitle('')
    }

    return (
        <div className="App">
            <SuperButton name={'Show up'} callBack={showUpHandler}/>
            <SuperButton name={'Delete'} callBack={deleteHandler}/>
            <SuperInput setNewTitle={setNewTitle} newTitle={newTitle}/>
            <SuperButton name={'Add new title'} callBack={addNewTitleHandler}/>
            <ul>
                {mappedTodos}
            </ul>
        </div>
    );
}

export default App;
