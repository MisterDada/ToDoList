import React from 'react'
import useStore from '../StateManager'

function DoneNotes() {
    const completeTodos = useStore((state) => state.completeTodos)

    return (
        <>
            <div>
                <h2>Completed Tasks</h2>
                <ul>
                    {completeTodos}
                </ul>
            </div>
        </>
    )
}

export default DoneNotes