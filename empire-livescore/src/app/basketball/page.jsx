'use client'
import React, { useState, useEffect } from 'react';
import style from './basketball.module.css';
import MainDate from '@/Component/MainDate/MainDate';
import MatchAfterBasketball from '@/Component/MatchAfter/MatchAfterBasketball';
import LeagueCom from '@/Component/League/LeagueCom';
import axios from 'axios';
import { useGlobalContext } from '@/Component/Context';

const page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoding] = useState(false);
  const [limitExceeded, setLimitExceeded] = useState(false);
  const [networkError, setNetworkError] = useState('');
  const { matchCategory, handleCountryClick, theCountry } = useGlobalContext();

  const fetchData = async () => {
    setLoding(true);
    try {
      const response = await axios.get("https://v1.basketball.api-sports.io/games", {
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": process.env.NEXT_PUBLIC_API
        },
        params: {
          date: new Date().toISOString().slice(0, 10)
        }

      });
      if (response.data.errors > 0) {
        setLimitExceeded(true);
      }
      if (response) {
        setData(response.data.response);
        localStorage.setItem("basketball", JSON.stringify(response.data.response));
      }
    } catch (error) {
      setNetworkError(error.message);
      console.log("Error:", error);
    }
    finally {
      setLoding(false);
    }
  };

  console.log(data);

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className={style.basketball}>
      <MainDate />
      {
        loading ? <p className={style.loadingText}>Loading</p>
          :
          <>
            {
              networkError ? <div className={style.limitExceeded}>
                <h2>{networkError} 🚫</h2>
                <p>Please check your connection and try again.</p>
              </div>
                :
                <>
                  {
                    limitExceeded ? <div className={style.limitExceeded}>
                      <h2>Daily Request Limit Reached 🚫</h2>
                      <p>Thank you for using E-Live Score app! Unfortunately, we've exceeded the daily limit of 100 requests provided by the free API we use to fetch live match data.</p>
                      <p>Since the app is built using a free service, we are only allowed to make 100 requests per day. We apologize for the inconvenience and invite you to check back tomorrow when the request limit resets.</p>
                      <p>We appreciate your support and understanding!</p>
                    </div>
                      :
                      <>
                        {
                          data.map((data, id) => {
                            if (matchCategory === "All" || matchCategory === "Live" && data.status.long !== "Game Finished" && data.scores.home.quarter_1 !== null || theCountry === data.country.name) {
                              return (
                                <div key={id}>
                                  <div onClick={()=>handleCountryClick(data.country.name)}>
                                  <LeagueCom country={data.country.name} league={data.league.name} leagueLogo={data.league.logo} />
                                  </div>
                                  <MatchAfterBasketball team1Logo={data.teams.home.logo} team2Logo={data.teams.away.logo} team1={data.teams.home.name} team2={data.teams.away.name} time={data.time} status={data.status.short} teamGoal1={data.scores.home.total} teamGoal2={data.scores.away.total} id={data.id} />
                                </div>
                              )
                            }
                          })
                        }
                      </>
                  }
                </>
            }
          </>
      }
    </div>
  )
}

export default page
