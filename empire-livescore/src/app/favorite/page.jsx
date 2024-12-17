"use client";
import React, { useEffect, useState } from "react";
import style from "./favorite.module.css";
import { LiaTimesSolid } from "react-icons/lia";
import LeagueCom from "@/Component/League/LeagueCom";
import { useGlobalContext } from "@/Component/Context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FootballFavorite from "@/Component/Favorites/FootballFavorite";
import BasketballFavorite from "@/Component/Favorites/BasketballFavorite";

const Page = () => {
  return (
    <div className={style.favorites}>
      <div className={style.fooballFav}>
        <FootballFavorite />
      </div>
      <div className={style.fooballFav}>
        <BasketballFavorite />
      </div>
    </div>
  );
};

export default Page;
