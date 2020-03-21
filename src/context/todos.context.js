import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';
const initTodos = [{ id: 0, task: 'Add your todo', completed: false }];

export const todosContext = createContext();

export function TodosProvider(props) {
  const todosBundle = useTodoState(initTodos);

  return (
    <todosContext.Provider value={todosBundle}>
      {props.children}
    </todosContext.Provider>
  );
}
