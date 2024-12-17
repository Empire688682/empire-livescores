"use client";
import React, { useEffect, useState } from "react";
import style from "./Favorites.module.css";
import { LiaTimesSolid } from "react-icons/lia";
import LeagueCom from "@/Component/League/LeagueCom";
import { useGlobalContext } from "@/Component/Context";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FootballFavorite = () => {
  const router = useRouter();
  const { handleCountryClick, handleFootballFavorite, footballFavorite } =
    useGlobalContext();
  const [footballData, setFootballData] = useState([]);

  const handleMatchClick = (id) => {
    router.push(`/football/${id}`);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFootball = localStorage.getItem("football");
      setFootballData(storedFootball ? JSON.parse(storedFootball) : []);
    }
  }, []);

  const footballFavorites = footballData
    ? footballData.filter((favorite) =>
        footballFavorite.includes(favorite.fixture.id),
      )
    : [];

  console.log("fav:", footballFavorites);

  return (
    <div className={style.footballFavorite}>
      {footballFavorites.length > 0 ? (
        footballFavorites.map((data) => (
          <div key={data.fixture.id}>
            <div onClick={() => handleCountryClick(data.league.country)}>
              <LeagueCom
                country={data.league.country}
                league={data.league.name}
                leagueLogo={data.league.logo}
              />
            </div>
            <div className={style.match_after}>
              <div
                className={style.left_Content}
                onClick={() => handleMatchClick(data.fixture.id)}
              >
                <div className={style.time}>
                  {data.goals.home !== null ? (
                    <p>
                      {data.goals.home} : {data.goals.away}
                    </p>
                  ) : (
                    <p>timeOnly</p>
                  )}
                  {data.fixture.status.elapsed !== null ? (
                    <p>{data.fixture.status.elapsed}.</p>
                  ) : null}
                  <p>{data.fixture.status.short}</p>
                </div>
                <div className={style.teams}>
                  <div className={style.team} id="team1">
                    <div className={style.team_logo}>
                      <Image
                        src={data.teams.home.logo}
                        alt="Premier League"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                      />
                    </div>
                    <div className={style.team_name}>
                      {data.teams.home.name}
                    </div>
                  </div>
                  <div className={style.team} id="team2">
                    <div className={style.team_logo}>
                      <Image
                        src={data.teams.away.logo}
                        alt="Premier League"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                      />
                    </div>
                    <div className={style.team_name}>
                      {data.teams.away.name}
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.right_Content}>
                <LiaTimesSolid
                  className={style.star_icon}
                  onClick={() => handleFootballFavorite(data.fixture.id)}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className={style.noFavorite}>No favorites yet.</p>
      )}
    </div>
  );
};

export default FootballFavorite;
