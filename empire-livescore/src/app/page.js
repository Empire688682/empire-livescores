'use client'
import FootballCom from '@/Component/FootballCom/FootballCom';
import MainDate from '@/Component/MainDate/MainDate';
import React, { useState, useEffect } from 'react';
import style from './page.module.css';
import MatchAfter from '@/Component/MatchAfter/MatchAfter';
import axios from 'axios';

const page = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://v1.basketball.api-sports.io/games", {
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": process.env.NEXT_PUBLIC_API
        },
        params:{
          date: new Date().toISOString().slice(0, 10)
        }
        
      });
      console.log(response);
      if (response) {
        setData(response.data.response);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  console.log("Data:", data);
  useEffect(()=>{
    fetchData();
    console.log(new Date().toISOString().slice(0, 10));
  },[])
  return (
    <div className={style.page}>
      <MainDate/>
      {
        data.map((data)=>{
          return (
            <div>
              <FootballCom/>
              <MatchAfter/>
              <p>{data.country.name}</p>
              <p>{data.league.name}</p>
              <p>{data.teams.away.name}</p>
              <p>{data.teams.away.logo}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default page
