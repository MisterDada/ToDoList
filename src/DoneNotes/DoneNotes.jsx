import React from 'react'
import useStore from '../StateManager'


function DoneNotes() {
    const completeTodos = useStore((state) => state.completeTodos)
  return (
        <>
          <h1>{completeTodos}</h1>
        </>
  )
}

export default DoneNotes