import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useToggleState from './hooks/useToggleState';
import TodoEditForm from './TodoEditForm';
import { TodosContext } from './context/todos.context';

export default function TodoListItem({ id, task, completed }) {
  const { removeTodo, toggleTodo } = useContext(TodosContext);
  const [isEditing, toggleEdit] = useToggleState(false);

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <TodoEditForm id={id} task={task} toggleEdit={toggleEdit} />
      ) : (
        <>
          <Checkbox
            checked={completed}
            tabIndex={-1}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : '' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="edit" onClick={toggleEdit}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
