import React from 'react'
import useStore from '../StateManager'


function DoneNotes() {
    const completeTodos = useStore((state) => state.completeTodos)
  return (
        <>
           {completeTodos}
        </>
  )
}

export default DoneNotes