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
      return storedFav ? JSON.parse(storedFav) : [];
    }
    return [];
  });
  const [basketballFavorite, setBasketballFavorite] = useState(() => {
    if (typeof window !== "undefined") {
      const storedFav = localStorage.getItem("basketballFav");
      return storedFav ? JSON.parse(storedFav) : [];
    }
    return [];
  });

  const [handballFavorite, setHandballFavorite] = useState(() => {
    if (typeof window !== "undefined") {
      const storedFav = localStorage.getItem("handballFav");
      return storedFav ? JSON.parse(storedFav) : [];
    }
    return [];
  });

  const [hockeyballFavorite, setHockeyballFavorite] = useState(() => {
    if (typeof window !== "undefined") {
      const storedFav = localStorage.getItem("hockeyballFav");
      return storedFav ? JSON.parse(storedFav) : [];
    }
    return [];
  });

  const handleCountryClick = (country) => {
    setTheCountry((prev) => (prev === country ? "" : country));
    setMatchCategory((prev) => (prev === "All" ? "" : "All"));
  };

  const handleFootballFavorite = (id) => {
    if (!id || !Array.isArray(footballFavorite)) return;
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
    if (!id || !Array.isArray(basketballFavorite)) return;
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

  const handleHandballFavorite = (id) => {
    if (!id || !Array.isArray(handballFavorite)) return;
    setHandballFavorite((prevFav) => {
      const upadatedFav = prevFav.includes(id)
        ? prevFav.filter((item) => item !== id)
        : [...prevFav, id];
      // Update localStorage with the new state
      if (typeof window !== "undefined") {
        localStorage.setItem("handballFav", JSON.stringify(upadatedFav));
      }
      return upadatedFav;
    });
  };

  const handleHockeyballFavorite = (id) => {
    if (!id || !Array.isArray(hockeyballFavorite)) return;
    setHockeyballFavorite((prevFav) => {
      const upadatedFav = prevFav.includes(id)
        ? prevFav.filter((item) => item !== id)
        : [...prevFav, id];
      // Update localStorage with the new state
      if (typeof window !== "undefined") {
        localStorage.setItem("hockeyballFav", JSON.stringify(upadatedFav));
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("handballFav", JSON.stringify(handballFavorite));
    }
  }, [handballFavorite]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("hockeyballFav", JSON.stringify(hockeyballFavorite));
    }
  }, [hockeyballFavorite]);

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
        handballFavorite,
        hockeyballFavorite,
        handleFootballFavorite,
        handleBasketballFavorite,
        handleHandballFavorite,
        handleHockeyballFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
