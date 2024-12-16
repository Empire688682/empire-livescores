"use client";
import React, { useEffect } from "react";
import style from "./LeagueCom.module.css";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { useGlobalContext } from "../Context";

const LeagueCom = ({ country, league, leagueLogo }) => {
  const { setLeague, theCountry } = useGlobalContext();

  return (
    <div className={style.league}>
      <div className={style.header}>
        <div className={style.left_Content}>
          <div className={style.img_Container}>
            <Image
              src={leagueLogo}
              alt="Premier League"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
            />
          </div>
          <div className={style.title}>
            <h3>{league}</h3>
            <p>{country}</p>
          </div>
        </div>
        <div className={style.right_Content}>
          <IoIosArrowForward className={style.header_icon} />
        </div>
      </div>
    </div>
  );
};

export default LeagueCom;
