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
  const [basketballFavorite, setBasketballFavorite] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFav = localStorage.getItem("footballFav");
      setFootballFavorite(storedFav ? JSON.parse(storedFav) : []);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFav = localStorage.getItem("basketballFav");
      setBasketballFavorite(storedFav ? JSON.parse(storedFav) : []);
    }
  }, []);

  const handleCountryClick = (country) => {
    setTheCountry((prev) => (prev === country ? "" : country));
    setMatchCategory((prev) => (prev === "All" ? "" : "All"));
  };

  const handleFootballFavorite = (id) => {
    if (!id) return;
    setFootballFavorite((prevFav) => {
      const upadatedFav = prevFav.includes(id)
        ? prevFav.filter((item) => item !== id)
        : [...prevFav, id];
      // Update localStorage with the new state
      if (typeof window !== "undefined") {
        localStorage.setItem("footballFav", JSON.stringify(upadatedFav));
      }
      return upadatedFav;
    });
  };

  const handleBasketballFavorite = (id) => {
    if (!id) return;
    setBasketballFavorite((prevFav) => {
      const upadatedFav = prevFav.includes(id)
        ? prevFav.filter((item) => item !== id)
        : [...prevFav, id];
      // Update localStorage with the new state
      if (typeof window !== "undefined") {
        localStorage.setItem("basketballFav", JSON.stringify(upadatedFav));
      }
      return upadatedFav;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("footballFav", JSON.stringify(footballFavorite));
    }
  }, [footballFavorite]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("basketballFav", JSON.stringify(basketballFavorite));
    }
  }, [basketballFavorite]);

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
        basketballFavorite,
        handleFootballFavorite,
        handleBasketballFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
