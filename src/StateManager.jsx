import { create } from "zustand";

const useStore = create((set) => ({
  completeTodos: [],
  completeTodo: (newTodos) => set({ completeTodos: newTodos }),

  addToCompleteTodoPage: (newTodos) =>
    set((state) => {
     
  
      const updatedTodo = [...state.completeTodos, newTodos];
      console.log("this doesnt exist");
      return { completeTodos: updatedTodo };
    }),
}));

export default useStore;
