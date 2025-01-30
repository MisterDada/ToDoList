import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Loginstyles.module.css'
import { useState } from 'react'

function Login() {

    const [name, setName] = useState("")

    const handleChange = (e) =>{
        setName(e.target.value)
    }



  return (
    <>
    <div className={styles['body']}>

        <div className={styles['image-section']}>
            <div className={styles['namespace']}>
            <h1>Hello {name}</h1>
            <div className={styles['caret']}></div>
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
        <form action="" method="post" className={styles['form-container']} noValidate>
          <h1>Sign-in</h1>
          <div className={styles['input-field']}>
            <input value={name} onChange={handleChange} type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            
          </div>
          {/* <a className={styles['forgot-password']} href="#">Forgot Password?</a> */}
          
            <button type="submit">Sign-in</button>
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