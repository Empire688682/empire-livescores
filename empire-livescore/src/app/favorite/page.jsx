"use client";
import React, { useEffect, useState } from "react";
import style from "./favorite.module.css";
import FootballFavorite from "@/Component/Favorites/FootballFavorite";
import BasketballFavorite from "@/Component/Favorites/BasketballFavorite";
import { useGlobalContext } from "@/Component/Context";

const Page = () => {
  const { footballFavorite, basketballFavorite } = useGlobalContext();
  return (
    <div className={style.favorites}>
      {basketballFavorite && (
        <div className={style.fooballFav}>
          <BasketballFavorite />
        </div>
      )}
      {footballFavorite && (
        <div className={style.fooballFav}>
          <FootballFavorite />
        </div>
      )}
    </div>
  );
};

export default Page;
