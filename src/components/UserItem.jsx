import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const UserItem = ({ user }) => {
  const { dispatch } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setName(user.name);
  };

  const handleUpdate = () => {
    if (name.trim() !== '') {
      dispatch({ type: 'UPDATE_USER', payload: { ...user, name } });
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_USER', payload: user.id });
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <span>{user.name}</span>
      )}
      {isEditing ? (
        <>
          <button onClick={handleUpdate}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
};

export default UserItem;
