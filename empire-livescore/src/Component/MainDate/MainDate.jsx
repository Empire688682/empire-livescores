'use client'
import React from 'react';
import style from './MainDate.module.css';
import { useGlobalContext } from '../Context';

const MainDate = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const today = new Date();
  const month = new Date().getMonth();
  const currentDayIndex = today.getDay(); // Get today's index (0-6)
  const {matchCategory, setMatchCategory} = useGlobalContext()

  // Function to generate the dates of the current week
  const getWeekDates = () => {
    return days.map((_, index) => {
      const date = new Date(today); // Clone today's date
      date.setDate(today.getDate() - currentDayIndex + index); // Adjust to get the correct date for each day of the week
      return date.getDate(); // Return only the day of the month
    });
  };

  const weekDates = getWeekDates();

  const handCat = () =>{
    if(matchCategory === 'Live'){
      setMatchCategory('All')
    }
    else{
      setMatchCategory("Live")
    }
  }

  return (
    <div className={style.main_Data}>
      <div className={style.days}>
        <div className={matchCategory === 'Live' ? `${style.live} ${style.active}` : style.live}>
          <p onClick={ handCat}>Live</p>
        </div>
        {days.map((day, index) => (
          <div key={day} className={style.day}>
            <div className={index === currentDayIndex ? style.today : style.day_name}>{index === currentDayIndex ? "Today" : day}</div>
            <div className={style.date_Container}>
              <p className={index === currentDayIndex ? style.today : style.date}>{weekDates[index]}</p>
              <p className={index === currentDayIndex ? `${style.today} ${style.month}` : style.month}>{months[month]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainDate;
