import React from 'react';
import style from './MainDate.module.css';

const MainDate = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className={style.main_Data}>
      <div className={style.days}>
        {days.map((day) => (
          <div key={day} className={style.day}>{day}</div>
        ))}
      </div>
    </div>
  )
}

export default MainDate
