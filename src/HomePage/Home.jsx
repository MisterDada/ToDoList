import React from 'react'
import styles from './Home.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useStore from '../StateManager'


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
    } 
    else if (todo.name === '' && todo.description === '') {
        e.preventDefault()
    alert('Please fill in all the fields')
    }
     else {
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


  //For state manager
  const completeTodo = useStore((state) => state.completeTodo)
  const completeTodos = useStore((state) => state.completeTodos)


    return (
        <>
        
          <div className={styles['body']}>
            <aside className={styles['sidebar']}>

                <div>
                    <div className={styles['sidebar-img']}><span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1b3c3c"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg></span>
                    <p>Collaborators</p>
                    </div>
                    <div className={styles['sidebar-img']}><span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1b3c3c"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg></span>
                    <p>Chat</p>
                    </div> 
                    <div>
                        <Link to='Completed-Notes'>Completed Notes</Link>
                    </div>
                </div>
                <div>
                    <div className={styles['sidebar-img']}><span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1b3c3c"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg></span>
                    <p>Settings</p>
                    </div>
                    <div className={styles['sidebar-img']}><span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1b3c3c"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg></span>
                    <p>Logout</p>
                    </div>
                    
                </div>
              
              
        </aside>
                <div className={styles['taskcontainer']}>
                    <h1>Tasks:</h1>
                    <input type="text" autoComplete='off' placeholder='Create Task' name='name' value={todo.name} onChange={handleTodo} />
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
                            <img className={styles['task-button']} onClick={() => populateEditFields(index)} src="src\assets\edit_square_24dp_1B3C3C_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
                            <img className={styles['task-button']} onClick={() => completeTodo(completeTodos)}  src="src\assets\check_24dp_1B3C3C_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
                        </div>
                    ))}
                  </div>
                    
                </div>
            </div>
        </>
    )
}

export default Home;