'use client'
import React, { useEffect, useState } from 'react';
import style from './hockey.module.css'
import MainDate from '@/Component/MainDate/MainDate';
import LeagueCom from '@/Component/League/LeagueCom';
import axios from 'axios';

const page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoding] = useState(false);
  const [limitExceeded, setLimitExceeded] = useState(false);
  const [networkError, setNetworkError] = useState('');

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
      if (response.data.errors) {
        setLimitExceeded(true);
      }
      if (response) {
        setData(response.data.response);
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
    <div className={style.hockey}>
      <MainDate />
      {
        loading ? <h2>LOADING.....</h2>
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
                          data.map((data) => {
                            return (
                              <div>
                                <LeagueCom country={data.country.name} league={data.league.name} leagueLogo={data.league.logo} />
                                <MatchAfter team1Logo={data.teams.home.logo} team2Logo={data.teams.away.logo} team1={data.teams.home.name} team2={data.teams.away.name} time={data.time} />
                              </div>
                            )
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