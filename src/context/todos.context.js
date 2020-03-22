import React, { createContext, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import useTodoState from '../hooks/useTodoState';
const initTodos = [{ id: 0, task: 'Add your todo', completed: false }];

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: uuid(), task: action.task, completed: false }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );
    default:
      return state;
  }
};

export const TodosContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todosReducer, initTodos);
  //const todosBundle = useTodoState(initTodos);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
