import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Loginstyles.module.css'
import { useState } from 'react'

function Login() {

   
    const [formData, setFormData] = useState({ username: "", password: ""})

    

    const handleInputChange = (e) =>{ 
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('submitted', formData)
    }


  return (
    <>
    <div className={styles['body']}>

        <div className={styles['image-section']}>
            <div className={styles['namespace']}>
            <h1>Hello</h1>
           
            </div>
            
            <p>Enter your details and start journey with us</p>
            <ul>
              <div className={styles['li-img']}><span><img src="src\assets\chevron_right_24dp_1B3C3C_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></span> <li>Create Collaborative Notes and ToDos</li></div> 
              <div className={styles['li-img']}><span><img src="src\assets\chevron_right_24dp_1B3C3C_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></span> <li>Track Progress</li></div>
              <div className={styles['li-img']}><span><img src="src\assets\chevron_right_24dp_1B3C3C_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></span> <li>Set Goals</li></div>
              <div className={styles['li-img']}><span><img src="src\assets\chevron_right_24dp_1B3C3C_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></span> <li>Meet Goals</li></div>
            </ul>
        </div>

    <div className={styles.container}>
        <form action="" method="post" className={styles['form-container']} noValidate onSubmit={handleSubmit}>
          <h1>Sign-in</h1>
          <div className={styles['input-field']}>
            <input value={ formData.username} name='username' onChange={handleInputChange} type="text" placeholder="Username" />
            <input type="password" value={formData.password} name='password' onChange={handleInputChange} placeholder="Password" />
            
          </div>
          {/* <a className={styles['forgot-password']} href="#">Forgot Password?</a> */}
          
            <button type="submit" >Sign-in</button>
          <div>
            <p>or sign-up with:</p>
            <p>Not a member? <Link to={"/register"} className={styles['link']}>Register</Link></p>
          </div>
        </form>
      </div>
    </div>
      
    </>
  )
}

export default Login