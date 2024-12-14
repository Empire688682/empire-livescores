"use client";
import React, { useState, useEffect } from "react";
import style from "./page.module.css";
import { CiStar } from "react-icons/ci";
import MainDate from "@/Component/MainDate/MainDate";
import LeagueCom from "@/Component/League/LeagueCom";
import axios from "axios";
import { useGlobalContext } from "@/Component/Context";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Page = () => {
  const {
    matchCategory,
    handleCountryClick,
    theCountry,
    league,
    setLeague,
    footballFavorite,
    handleFootballFavorite,
  } = useGlobalContext();
  const [data, setData] = useState([]);
  const [loading, setLoding] = useState(false);
  const [limitExceeded, setLimitExceeded] = useState(false);
  const [networkError, setNetworkError] = useState("");
  const router = useRouter();

  const fetchData = async () => {
    setLoding(true);
    try {
      const response = await axios.get(
        "https://v3.football.api-sports.io/fixtures",
        {
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": process.env.NEXT_PUBLIC_API,
          },
          params: {
            date: new Date().toISOString().slice(0, 10),
          },
        },
      );
      if (response.data.errors > 0) {
        setLimitExceeded(true);
      }
      if (response) {
        console.log("DATA:", response.data.response);
        setData(response.data.response);
        console.log("response:", response);
        localStorage.setItem(
          "football",
          JSON.stringify(response.data.response),
        );
      }
    } catch (error) {
      setNetworkError(error.message);
      console.log("Error:", error);
    } finally {
      setLoding(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleMatchClick = (id) => {
    router.push(`/football/${id}`);
    console.log("Id:", id);
  };

  return (
    <div className={style.football}>
      <MainDate />
      {loading && <p className={style.loadingText}>Loading</p>}
      <div>
        {networkError && (
          <div className={style.limitExceeded}>
            <h2>{networkError} 🚫</h2>
            <p>Please check your connection and try again.</p>
          </div>
        )}
      </div>
      <div>
        {limitExceeded && (
          <div className={style.limitExceeded}>
            <h2>Daily Request Limit Reached 🚫</h2>
            <p>
              Thank you for using E-Live Score app! Unfortunately, we have
              exceeded the daily limit of 100 requests provided by the free API
              we use to fetch live match data.
            </p>
            <p>
              Since the app is built using a free service, we are only allowed
              to make 100 requests per day. We apologize for the inconvenience
              and invite you to check back tomorrow when the request limit
              resets.
            </p>
            <p>We appreciate your support and understanding!</p>
          </div>
        )}
      </div>
      {data &&
        data.map((data, id) => {
          if (
            matchCategory === "All" ||
            (matchCategory === "Live" &&
              data.fixture.status.long !== "Match Finished" &&
              data.fixture.status.long !== "Match Suspended" &&
              data.score.halftime.home !== null) ||
            theCountry === data.league.country ||
            (league.league === data.league.name &&
              league.country === data.league.country)
          ) {
            return (
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
                        <>
                          <p>
                            {data.goals.home} : {data.goals.away}
                          </p>
                        </>
                      ) : (
                        <p>timeOnly</p>
                      )}
                      {data.fixture.status.elapsed !== null &&
                      status !== "FT" ? (
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
                    <CiStar
                      className={style.star_icon}
                      onClick={() => handleFootballFavorite(data.fixture.id)}
                    />
                  </div>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default Page;
