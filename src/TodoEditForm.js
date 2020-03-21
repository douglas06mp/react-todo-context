import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

export default function TodoEditForm({ id, task, editTodo, toggleEdit }) {
  const [value, handleChange, reset] = useInputState(task);
  const handleSubmit = e => {
    e.preventDefault();
    editTodo(id, value);
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
