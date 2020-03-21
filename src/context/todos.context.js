import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';
const initTodos = [{ id: 0, task: 'Add your todo', completed: false }];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosBundle = useTodoState(initTodos);

  return (
    <TodosContext.Provider value={todosBundle}>
      {props.children}
    </TodosContext.Provider>
  );
}
