import React, { Fragment, useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import TodoListItem from './TodoListItem';
import { TodosContext } from './context/todos.context';

export default function TodoList() {
  const { todos } = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, idx) => (
            <Fragment key={todo.id}>
              <TodoListItem {...todo} />
              {idx < todos.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}
