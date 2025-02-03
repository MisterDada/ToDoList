import { create } from 'zustand'

const useStore = create((set) => ({
  completeTodos: [],
  completeTodo: (newTodos) => set({completeTodos: newTodos})
}))

export default useStore