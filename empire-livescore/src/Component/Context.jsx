"use client";
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [matchCategory, setMatchCategory] = useState("All");
  const [theCountry, setTheCountry] = useState("");
  const [league, setLeague] = useState({});
  const [footballFavorite, setFootballFavorite] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFav = localStorage.getItem("footballFav");
      setFootballFavorite(storedFav ? JSON.parse(storedFav) : []);
    }
  }, []);

  const handleCountryClick = (country) => {
    setTheCountry((prev) => (prev === country ? "" : country));
    setMatchCategory((prev) => (prev === "All" ? "" : "All"));
  };

  const handleFootballFavorite = (id) => {
    setFootballFavorite((prevFav) =>
      prevFav.includes(id)
        ? prevFav.filter((item) => item !== id)
        : [...prevFav, id],
    );
  };

  const removeFootballFavorite = (id) => {
    const updatedFav = footballFavorite.filter((favId) => favId !== id);
    setFootballFavorite(updatedFav);
    localStorage.setItem("footballFav", JSON.stringify(updatedFav));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("footballFav", JSON.stringify(footballFavorite));
    }
  }, [footballFavorite, removeFootballFavorite]);

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
        removeFootballFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
