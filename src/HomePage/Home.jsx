import React from 'react'
import styles from './Home.module.css'
import { useState } from 'react'

function Home() {
    const [todo, setTodo] = useState({name: '', description: ''})
    const [todos, setTodos] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    const handleTodo = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value})
    }

    const handleAddTodo = (e) => {
      if (editIndex !== null) {
        handleEditTodo(editIndex)
    } else {
        setTodos([...todos, todo])
    }
    setTodo({name: '', description: ''}) // Clear the input fields after adding
    setEditIndex(null)
    }

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index)
        setTodos(newTodos)
    }

    const handleEditTodo = (index) => {
        const newTodos = todos.map((task, i) => {
            if(i === index){
                return {
                    ...task,
                    name: todo.name,
                    description: todo.description
                }
            }
            return task
        })
        setTodos(newTodos)
    }

    const populateEditFields = (index) => {
      setTodo({
          name: todos[index].name,
          description: todos[index].description
      })
      setEditIndex(index)
  }

    return (
        <>
        
          <div className={styles['body']}>
            <aside className={styles['sidebar']}>
              <div className={styles['sidebar-img']}><span> <img src="src\assets\group_24dp_1B3C3C_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></span>
              <p>Collaborators</p>
              </div>
              <div className={styles['sidebar-img']}><span> <img src="src\assets\settings_24dp_1B3C3C_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></span>
              <p>Settings</p>
              </div>
              <div className={styles['sidebar-img']}><span> <img src="src\assets\logout_24dp_1B3C3C_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></span>
              <p>Logout</p>
              </div>
              <div className={styles['sidebar-img']}><span> <img src="src\assets\chat_24dp_1B3C3C_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></span>
              <p>Chat</p>
              </div>
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
                            <img className={styles['task-button']} onClick={() => handleDeleteTodo(index)} src="src\assets\delete_24dp_1B3C3C_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
                            <img className={styles['task-button']} src="src\assets\check_24dp_1B3C3C_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
                            <img className={styles['task-button']} onClick={() => populateEditFields(index)} src="src\assets\edit_square_24dp_1B3C3C_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
                        </div>
                    ))}
                  </div>
                    
                </div>
            </div>
        </>
    )
}

export default Home;