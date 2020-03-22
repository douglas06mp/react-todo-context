import React, { useContext, memo } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useToggleState from './hooks/useToggleState';
import TodoEditForm from './TodoEditForm';
import { DispatchContext } from './context/todos.context';

function TodoListItem({ id, task, completed }) {
  const dispatch = useContext(DispatchContext);
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
            onClick={() => dispatch({ type: 'TOGGLE_TODO', id })}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : '' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="delete"
              onClick={() => dispatch({ type: 'REMOVE_TODO', id })}
            >
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

export default memo(TodoListItem);
