'use client';
import React, { useContext, useEffect, useState } from 'react';

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

  useEffect(()=>{
    if(typeof window !== "undefined"){
      const storedFav = JSON.parse(localStorage.getItem("favourite"));
      if(storedFav){
        setFav(storedFav);
      }
    }
  },[])

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
    });
  }

  useEffect(()=>{
    localStorage.setItem("favourite", JSON.stringify(fav));
  }, [fav])

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
      fav
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
