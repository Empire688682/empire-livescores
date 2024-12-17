"use client";
import React, { useEffect, useState } from "react";
import style from "./Favorites.module.css";
import { LiaTimesSolid } from "react-icons/lia";
import LeagueCom from "@/Component/League/LeagueCom";
import { useGlobalContext } from "@/Component/Context";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BasketballFavorite = () => {
  const router = useRouter();
  const { handleCountryClick, handleBasketballFavorite, basketballFavorite } =
    useGlobalContext();
  const [basketballData, setBasketballData] = useState([]);

  const handleMatchClick = (id) => {
    router.push(`/basketball/${id}`);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedBasketball = localStorage.getItem("basketball");
      setBasketballData(storedBasketball ? JSON.parse(storedBasketball) : []);
    }
  }, []);

  const basketballFavorites = basketballData
    ? basketballData.filter((favorite) =>
        basketballFavorite.includes(favorite.id),
      )
    : [];

  console.log("fav:", basketballFavorites);

  return (
    <div className={style.basketballFavorite}>
      {basketballFavorites.length > 0 ? (
        basketballFavorites.map((data, id) => (
          <div key={data.id}>
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
                onClick={() => handleMatchClick(data.id)}
              >
                <div className={style.time}>
                  {data.scores.home.total !== null ? (
                    <p>
                      {data.scores.home.total} : {data.scores.away.total}
                    </p>
                  ) : (
                    <p>{data.time}</p>
                  )}
                  <p>{data.status.short}</p>
                </div>
                <div className={style.teams}>
                  <div className={style.team} id={data.teams.home.name}>
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
                  <div className={style.team} id={data.teams.away.name}>
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
                  onClick={() => handleBasketballFavorite(data.id)}
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

export default BasketballFavorite;
