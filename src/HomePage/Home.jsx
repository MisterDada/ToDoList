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
        console.log('added', todos)
        setTodo({name: '', description: ''}) // Clear the input fields after adding
        
    }

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index)
        setTodos(newTodos)
    }

    return (
        <>
        
            <div className={styles['body']}>
            <aside className={styles['sidebar']}>
              <div className={styles['sidebar-img']}><span> <img src="src\assets\group_24dp_1B3C3C_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></span></div>
              <div className={styles['sidebar-img']}><span> <img src="src\assets\settings_24dp_1B3C3C_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></span></div>
              <div className={styles['sidebar-img']}><span> <img src="src\assets\logout_24dp_1B3C3C_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></span></div>
        </aside>
                <div className={styles['taskcontainer']}>
                    <h1>Tasks:</h1>
                    <input type="text" placeholder='Create Task' name='name' value={todo.name} onChange={handleTodo} />
                    <input className={styles['taskinput-description']} type="text" placeholder='Add Description' name='description' value={todo.description} onChange={handleTodo}/>
                    <button onClick={handleAddTodo}>Add Task</button>
                </div>
                
                <div className={styles['createdtodos']}>
                  <div className={styles['addedtaskscontainer']}>
                  {todos.map((task, index) => (
                        <div key={index} className={styles['task']}>
                            <li>{index+1}</li>
                            <h2>{task.name}</h2>
                            <p>{task.description}</p>
                            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                            <button >Done</button>
                        </div>
                    ))}
                  </div>
                    
                </div>
            </div>
        </>
    )
}

export default Home;