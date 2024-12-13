"use client";
import React, { useState, useEffect, useCallback } from "react";
import style from "./MatchAfter.module.css";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { useRouter } from "next/navigation";

const MatchAfterBasketball = ({
  team1Logo,
  id,
  team2Logo,
  team1,
  team2,
  time,
  status,
  teamGoal1,
  teamGoal2,
}) => {
  const router = useRouter();
  const [basketFavorite, setBasketFavorite] = useState(() => {
    const storedbasketFavorite = localStorage.getItem("basketFavorite");
    return storedbasketFavorite ? JSON.parse(storedbasketFavorite) : [];
});

const handlebasketFavorite = (id) =>{
  if(id){
    const updateFav = basketFavorite.includes(id) ? 
    basketFavorite.filter((favId)=> favId !== id)
    :
    [...basketFavorite, id]
    setBasketFavorite(updateFav);
  }
  else{
    console.log("No id found man");
  }
}

  useEffect(()=>{
    localStorage.setItem("basketFavorite", JSON.stringify(basketFavorite));
  },[basketFavorite]);

  console.log("basketFavorite:", basketFavorite);

  const handleClick = () => {
    if (id) {
      router.push(`/basketball/${id}`);
    } else {
      console.error("ID is undefined");
    }
  };

  return (
    <div className={style.match_after}>
      <div className={style.left_Content} onClick={handleClick}>
        <div className={style.time}>
          {teamGoal1 !== null ? (
            <p>
              {teamGoal1} : {teamGoal2}
            </p>
          ) : (
            <p>{time}</p>
          )}
          <p>{status}</p>
        </div>
        <div className={style.teams}>
          <div className={style.team} id="team1">
            <div className={style.team_logo}>
              <Image
                src={team1Logo}
                alt="Premier League"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
              />
            </div>
            <div className={style.team_name}>
              {team1}
            </div>
          </div>
          <div className={style.team} id="team2">
            <div className={style.team_logo}>
              <Image
                src={team2Logo}
                alt="Premier League"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
              />
            </div>
            <div className={style.team_name}>{team2}</div>
          </div>
        </div>
      </div>
      <div className={style.right_Content}>
        <CiStar className={style.star_icon} onClick={() => handlebasketFavorite(id)}/>
      </div>
    </div>
  );
};

export default MatchAfterBasketball;
