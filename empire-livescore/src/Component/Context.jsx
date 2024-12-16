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
      setFootballFavorite(localStorage.getItem("footballFav") || []);
    }
  }, []);

  const handleCountryClick = (country) => {
    setTheCountry((prev) => (prev === country ? "" : country));
    setMatchCategory((prev) => (prev === "All" ? "" : "All"));
  };

  console.log("theCountry:", theCountry);
  console.log("matchCategory:", matchCategory);

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
