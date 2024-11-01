'use client'
import React, { useState, useEffect} from 'react';
import style from './page.module.css';
import MainDate from '@/Component/MainDate/MainDate';
import LeagueCom from '@/Component/League/LeagueCom';
import axios from 'axios';
import MatchAfterFootball from '@/Component/MatchAfter/MatchAfterFootball';
import { useGlobalContext } from '@/Component/Context';
import dotenv from 'dotenv';
import { set } from 'mongoose';
dotenv.config()

const page = () => {
  const { matchCategory, setMatchCategory, setTheCountry, theCountry } = useGlobalContext();
  const [data, setData] = useState([]);
  const [loading, setLoding] = useState(false);
  const [limitExceeded, setLimitExceeded] = useState(false);
  const [networkError, setNetworkError] = useState('');

  const handleCountryClick = (country) =>{
    setTheCountry(country);
    setMatchCategory("")
  }

  const fetchData = async () => {
    setLoding(true);
    try {
      const response = await axios.get("https://v3.football.api-sports.io/fixtures", {
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
        console.log("DATA:", response.data.response);
        setData(response.data.response);
        localStorage.setItem("football", JSON.stringify(response.data.response));
      }
    } catch (error) {
      setNetworkError(error.message);
      console.log("Error:", error);
    }
    finally {
      setLoding(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className={style.page}>
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
                            if (matchCategory === "All" || matchCategory === "Live" && data.fixture.status.long !== "Match Finished" && data.fixture.status.long !== "Match Suspended" && data.score.halftime.home !== null ||  data.league.country === theCountry ) {
                              return (
                                <div key={id}>
                                  <div onClick={()=>handleCountryClick(data.league.country)}>
                                  <LeagueCom country={data.league.country} league={data.league.name} leagueLogo={data.league.logo} />
                                  </div>
                                  <MatchAfterFootball team1Logo={data.teams.home.logo} team2Logo={data.teams.away.logo} team1={data.teams.home.name} status={data.fixture.status.short} teamGoal1={data.goals.home} teamGoal2={data.goals.away} team2={data.teams.away.name} time={data.fixture.date} id={data.fixture.id} timeCount={data.fixture.status.elapsed} />
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