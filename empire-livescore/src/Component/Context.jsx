'use client';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import dotenv from 'dotenv';
dotenv.config()

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [matchCategory, setMatchCategory] = useState("All");
  const [theCountry, setTheCountry] = useState("");
  return (
    <AppContext.Provider value={{
      showSidebar,
      setShowSidebar,
      showSideMenu,
      setShowSideMenu,
      matchCategory, 
      setMatchCategory,
      theCountry, 
      setTheCountry
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
