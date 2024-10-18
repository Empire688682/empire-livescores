import React from 'react';
import style from'./tennis.module.css';
import MainDate from '@/Component/MainDate/mainDate';

const page = () => {
  return (
    <div className={style.tennis}>
      <MainDate/>
      <h1>TENNIS PAGE HERE</h1>
    </div>
  )
}

export default page
