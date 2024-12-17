"use client";
import React, { useEffect, useState } from "react";
import style from "./favorite.module.css";
import FootballFavorite from "@/Component/Favorites/FootballFavorite";
import BasketballFavorite from "@/Component/Favorites/BasketballFavorite";
import { useGlobalContext } from "@/Component/Context";

const Page = () => {
  const { footballFavorite, basketballFavorite } = useGlobalContext();
  const [menu, setMenu] = useState("football");
  return (
    <div className={style.favorites}>
      <div className={style.favoritesHeader}>
        <h2>Favorite Page</h2>
        <div className={style.favoriteMenus}>
          <ul>
            <li
              className={
                menu === "football"
                  ? `${style.menu} ${style.active}`
                  : style.menu
              }
              onClick={() => setMenu("football")}
            >
              Football
            </li>
            <li
              className={
                menu === "basketball"
                  ? `${style.menu} ${style.active}`
                  : style.menu
              }
              onClick={() => setMenu("basketball")}
            >
              Basketball
            </li>
            <li
              className={
                menu === "handball"
                  ? `${style.menu} ${style.active}`
                  : style.menu
              }
              onClick={() => setMenu("handball")}
            >
              Handball
            </li>
            <li
              className={
                menu === "hockeyball"
                  ? `${style.menu} ${style.active}`
                  : style.menu
              }
              onClick={() => setMenu("hockeyball")}
            >
              Hockeyball
            </li>
            <li
              className={
                menu === "volleyball"
                  ? `${style.menu} ${style.active}`
                  : style.menu
              }
              onClick={() => setMenu("volleyball")}
            >
              Volleyball
            </li>
          </ul>
        </div>
      </div>
      {menu === "basketball" && (
        <div className={style.fooballFav}>
          <BasketballFavorite />
        </div>
      )}
      {menu === "football" && (
        <div className={style.fooballFav}>
          <FootballFavorite />
        </div>
      )}
    </div>
  );
};

export default Page;
