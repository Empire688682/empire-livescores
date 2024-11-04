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
  const [league, setLeague] = useState({});
  const [fav, setFav] = useState([]);

  const handleCountryClick = (country) => {
    setTheCountry(country);
    setMatchCategory("")
  }

  const handleFavClick = (id) =>{
    setFav((prev)=>{
      const updateFav = {...prev};
      if(!updateFav[id]){
        updateFav[id] = id
      }
      else{
        delete updateFav[id];
      }
      return updateFav;
    })
    console.log(id);
  }
  console.log(fav);

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
      setLeague,
      handleFavClick,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
