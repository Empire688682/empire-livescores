"use client";
import React, { useEffect, useState } from "react";
import style from "./favorite.module.css";
import FootballFavorite from "@/Component/Favorites/FootballFavorite";
import BasketballFavorite from "@/Component/Favorites/BasketballFavorite";
import { useGlobalContext } from "@/Component/Context";

const Page = () => {
  const { footballFavorite, basketballFavorite } = useGlobalContext();
  console.log("footballFavorite:", footballFavorite);
  return (
    <div className={style.favorites}>
      {footballFavorite && (
        <div className={style.fooballFav}>
          <FootballFavorite />
        </div>
      )}

      {basketballFavorite && (
        <div className={style.fooballFav}>
          <BasketballFavorite />
        </div>
      )}
    </div>
  );
};

export default Page;
