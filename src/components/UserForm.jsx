import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const UserForm = () => {
  const { dispatch } = useContext(UserContext);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      const newUser = {
        id: Date.now(),
        name,
      };
      dispatch({ type: 'ADD_USER', payload: newUser });
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
