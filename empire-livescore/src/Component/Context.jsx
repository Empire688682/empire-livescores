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
  const [league, setLeague] = useState("");

  const handleCountryClick = (country) => {
    setTheCountry(country);
    setMatchCategory("")
  }

  return (
    <AppContext.Provider value={{
      showSidebar,
      setShowSidebar,
      showSideMenu,
      setShowSideMenu,
      matchCategory, 
      setMatchCategory,
      theCountry, 
      setTheCountry,
      handleCountryClick,
      league, 
      setLeague
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
