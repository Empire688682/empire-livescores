'use client'
import MainDate from '@/Component/MainDate/MainDate';
import React, { useState, useEffect } from 'react';
import style from './page.module.css';
import MatchAfter from '@/Component/MatchAfter/MatchAfter';
import axios from 'axios';
import LeagueCom from '@/Component/League/LeagueCom';

const page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoding] = useState(false)

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
      if (response) {
        setData(response.data.response);
      }
    } catch (error) {
      console.log("Error:", error);
    }
    finally {
      setLoding(false);
    }
  };

  console.log("Data:", data)

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className={style.page}>
      <MainDate />
      {
        loading ? <h2>LOADING.....</h2>
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
    </div>
  )
}

export default page
