import React, { createContext, useReducer } from 'react';
import userReducer from './UserReducer';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
