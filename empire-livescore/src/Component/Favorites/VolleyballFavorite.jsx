import React, { useState, useEffect } from "react";
import style from "./Favorites.module.css";
import { LiaTimesSolid } from "react-icons/lia";
import LeagueCom from "@/Component/League/LeagueCom";
import { useGlobalContext } from "@/Component/Context";
import Image from "next/image";
import { useRouter } from "next/navigation";

const VolleyballFavorite = () => {
  const router = useRouter();
  const { handleCountryClick, handleVolleyballFavorite, volleyballFavorite } =
    useGlobalContext();
  const [volleyballData, setVolleyballData] = useState([]);

  const handleMatchClick = (id) => {
    router.push(`/volleyball/${id}`);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedVolleyball = localStorage.getItem("volleyball");
      setVolleyballData(storedVolleyball ? JSON.parse(storedVolleyball) : []);
    }
  }, []);

  const volleyballFavorites = volleyballData
    ? volleyballData.filter((favorite) =>
        volleyballFavorite.includes(favorite.id),
      )
    : [];

  console.log("volleyballData:", volleyballFavorites);

  return (
    <div className={style.volleyballFavorite}>
      {volleyballFavorites.length > 0 ? (
        volleyballFavorites.map((data, id) => (
          <div key={id}>
            <div onClick={() => handleCountryClick(data.league.country)}>
              <LeagueCom
                country={data.country.name}
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
                  {data.scores.home !== null ? (
                    <>
                      <p>
                        {data.scores.home} : {data.scores.away}
                      </p>
                    </>
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
                  onClick={() => handleVolleyballFavorite(data.id)}
                  className={style.star_icon}
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

export default VolleyballFavorite;
