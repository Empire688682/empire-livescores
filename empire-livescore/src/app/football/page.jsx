import React from 'react';
import style from './football.module.css';
import MainDate from '@/Component/MainDate/mainDate';

const page = () => {
  return (
    <div className={style.football}>
      <MainDate/>
      <h1>FOOTBALL PAGE HERE</h1>

    </div>
  )
}

export default page
