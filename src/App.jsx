import React from 'react'
import Login from './LoginPage/Login'
import Home from './HomePage/Home'
import DoneNotes from './DoneNotes/DoneNotes'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/Login" element={<Login />} />
        <Route path='/Completed-Notes' element={<DoneNotes />} />
      </Routes>
    </>
  )
}

export default App
