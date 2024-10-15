'use client';
import React, { useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const hello = "hello"; // Changed from 'helo' to 'hello'
  
  return (
    <AppContext.Provider value={{ hello }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
