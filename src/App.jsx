import React from 'react';
import { UserProvider } from './context/UserContext';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App = () => {
  return (
    <UserProvider>
      <h2>User List</h2>
      <UserList />
      <h2>Add User</h2>
      <UserForm />
    </UserProvider>
  );
};

export default App;


