"use client";
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [matchCategory, setMatchCategory] = useState("All");
  const [theCountry, setTheCountry] = useState("");
  const [league, setLeague] = useState({});
  const [footballFavorite, setFootballFavorite] = useState(() => {
    if (typeof window !== "undefined") {
      const storedFav = localStorage.getItem("footballFav");
      storedFav ? JSON.parse(storedFav) : [];
      return storedFav;
    }
  });

  const handleCountryClick = (country) => {
    setTheCountry((prev) => (prev === country ? "" : country));
  };

  const handleFootballFavorite = (id) => {
    setFootballFavorite((prevFav) =>
      prevFav.includes(id)
        ? prevFav.filter((item) => item !== id)
        : [...prevFav, id],
    );
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("footballFav", footballFavorite);
    }
  }, [footballFavorite]);

  console.log("footballFavorite:", footballFavorite);

  return (
    <AppContext.Provider
      value={{
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
        footballFavorite,
        handleFootballFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
