import React from 'react';
import style from './MainDate.module.css';

const MainDate = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const today = new Date();
  const month = new Date().getMonth();
  console.log("month: ", month);
  const currentDayIndex = today.getDay(); // Get today's index (0-6)

  // Function to generate the dates of the current week
  const getWeekDates = () => {
    return days.map((_, index) => {
      const date = new Date(today); // Clone today's date
      date.setDate(today.getDate() - currentDayIndex + index); // Adjust to get the correct date for each day of the week
      return date.getDate(); // Return only the day of the month
    });
  };

  const weekDates = getWeekDates();

  return (
    <div className={style.main_Data}>
      <div className={style.days}>
        {days.map((day, index) => (
          <div key={day} className={style.day}>
            <div>{index === currentDayIndex ? "Today" : day}</div>
            <div className={index === currentDayIndex ? style.today : ''}>
              <p>{weekDates[index]}</p>
              <p>{months[month+1]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainDate;
