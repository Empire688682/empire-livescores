"use·client";
import React, { useState } from "react";
import style from "./CompetitionCom.module.css";
import premier_league from "../../public/premier-league.png";
import Image from "next/image";
import { CiStar } from "react-icons/ci";

const CompetitionCom = () => {
  const [starClick, setStarClick] = useState(false);
  return (
    <div className={style.competition}>
      <div className={style.header}>
        <div className={style.left_Content}>
          <div className={style.img_Container}>
            <Image
              src={premier_league}
              alt="Premier League"
              ssizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
            />
          </div>
          <div className={style.title}>
            <h3>Premier League</h3>
            <p>England</p>
          </div>
        </div>
        <div className={style.right_Content}>
          <CiStar
            onClick={() => setStarClick(!starClick)}
            className={
              starClick
                ? `${style.header_icon} ${style.active}`
                : style.header_icon
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CompetitionCom;
