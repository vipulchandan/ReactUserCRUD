import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import UserItem from './UserItem';

const UserList = () => {
  const { state } = useContext(UserContext);

  return (
    <ul>
      {state.users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
