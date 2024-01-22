import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
         id: 1,
          todo: "Todo msg",
           complete: false
         }
        ],
        addTodo:(todo) =>{},
            updateToDo:(id,todo) =>{},
            deleteToDo:(id)=>{},
            toggeleComplete:(id)=>{}
        
});

export const useTodo = () => {
  return useContext(ToDoContext);
};

export const ToDoProvider = ToDoContext.Provider;
