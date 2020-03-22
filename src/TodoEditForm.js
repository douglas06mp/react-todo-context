import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './context/todos.context';

export default function TodoEditForm({ id, task, toggleEdit }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'EDIT_TODO', id, newTask: value });
    reset();
    toggleEdit();
  };
  return (
    <form onSubmit={handleSubmit} style={{ width: '50%', marginLeft: '1rem' }}>
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
