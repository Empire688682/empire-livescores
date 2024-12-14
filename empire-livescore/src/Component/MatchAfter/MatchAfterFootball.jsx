"use client";
import React, { useEffect, useState } from "react";
import style from "./MatchAfter.module.css";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../Context";

const MatchAfterFootball = ({
  team1Logo,
  timeCount,
  id,
  team2Logo,
  team1,
  team2,
  time,
  status,
  teamGoal1,
  teamGoal2,
}) => {
  const timeOnly = new Date(time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const router = useRouter();

  // Initialize state from localStorage on first render
  const [footballFavorite, setFootballFavorite] = useState(() => {
    if (typeof window !== "undefined") {
      const savedFavorites = localStorage.getItem("footballFavorites");
      return savedFavorites ? JSON.parse(savedFavorites) : {};
    }
  });

  const handlefootballFavorite = (id) => {
    if (id) {
      setFootballFavorite((prev) => {
        const updateFavorites = { ...prev };

        if (updateFavorites[id]) {
          delete updateFavorites[id];
        } else {
          updateFavorites[id] = {
            id,
            team1,
            team2,
            time,
            team1Logo,
            team2Logo,
            status,
            teamGoal1,
            teamGoal2,
          };
        }

        // Persist to localStorage
        localStorage.setItem(
          "footballFavorites",
          JSON.stringify(updateFavorites),
        );

        return updateFavorites;
      });
    } else {
      console.log("No id found man");
    }
  };

  console.log("footballFavorite:", footballFavorite);

  // Check if this specific match is a favorite
  const isFavorite = footballFavorite && footballFavorite[id] !== undefined;

  const handleClick = () => {
    if (id) {
      router.push(`/football/${id}`);
    } else {
      console.error("ID is undefined");
    }
  };
  return (
    <div className={style.match_after}>
      <div className={style.left_Content} onClick={handleClick}>
        <div className={style.time}>
          {teamGoal1 !== null ? (
            <>
              <p>
                {teamGoal1} : {teamGoal2}
              </p>
            </>
          ) : (
            <p>{timeOnly}</p>
          )}
          {timeCount !== null && status !== "FT" ? <p>{timeCount}.</p> : null}
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
            <div className={style.team_name}>{team1}</div>
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
        <CiStar
          onClick={() => handlefootballFavorite(id)}
          className={style.star_icon}
        />
      </div>
    </div>
  );
};

export default MatchAfterFootball;
