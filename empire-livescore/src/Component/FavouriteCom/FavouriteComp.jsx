'use client'
import React, { useState } from 'react';
import style from './FavouriteCom.module.css'
import FootballCom from '../FootballCom/FootballCom';
import CompetitionCom from '../CompetitionCom/CompetitionCom';

const FavouriteCom = () => {
  const [fav, setFav] = useState("matches");
  return (
    <div className={style.favourite}>
      <div className={style.header}>
        <p onClick={() => setFav("matches")} className={fav === "matches" ? style.active : ""}>Matches</p>
        <p onClick={() => setFav("competitions")} className={fav === "competitions" ? style.active : ""}>Competitions</p>
      </div>
      <div className={style.content}>
        {
          fav === "matches"? <FootballCom />:<CompetitionCom/>
        }
      </div>
    </div>
  )
}

export default FavouriteCom
