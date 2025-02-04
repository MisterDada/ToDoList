import { create } from "zustand";

const useStore = create((set) => ({
  completeTodos: [],
  completeTodo: (newTodo) => 
    set((state) => ({
      completeTodos: [...state.completeTodos, newTodo]
    })),

  addToCompleteTodoPage: (newTodo) =>
    set((state) => {
      const updatedTodo = [...state.completeTodos, newTodo];
      return { completeTodos: updatedTodo };
    }),
}));

export default useStore;
