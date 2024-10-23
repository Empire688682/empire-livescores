'use client';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import dotenv from 'dotenv';
dotenv.config()

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  return (
    <AppContext.Provider value={{
      showSidebar,
      setShowSidebar,
      showSideMenu,
      setShowSideMenu,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
