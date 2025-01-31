import React from 'react'
import styles from './Home.module.css'
import { useState } from 'react'

function Home() {
    const [todo, setTodo] = useState({name: '', description: ''})
    const [todos, setTodos] = useState([])

    const handleTodo = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value})
    }

    const handleAddTodo = (e) => {
        setTodos([...todos, todo])
        setTodo({name: '', description: ''}) // Clear the input fields after adding
        console.log('added', todos)
    }

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index)
        setTodos(newTodos)
    }

    return (
        <>
            <div className={styles['body']}>
                <div className={styles['taskcontainer']}>
                    <h1>Tasks:</h1>
                    <input type="text" placeholder='Create Task' name='name' value={todo.name} onChange={handleTodo} />
                    <input className={styles['taskinput-description']} type="text" placeholder='Description' name='description' value={todo.description} onChange={handleTodo}/>
                    <button onClick={handleAddTodo}>Add Task</button>
                </div>
                
                <div className={styles['createdtodos']}>
                  <div className={styles['addedtaskscontainer']}>
                  {todos.map((task, index) => (
                        <div key={index} className={styles['task']}>
                            <h2>{task.name}</h2>
                            <p>{task.description}</p>
                            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                        </div>
                    ))}
                  </div>
                    
                </div>
            </div>
        </>
    )
}

export default Home;