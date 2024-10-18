import React from 'react';
import style from './basketball.module.css';
import MainDate from '@/Component/MainDate/mainDate';

const page = () => {
  return (
    <div className={style.basketball}>
      <MainDate />
      <h1>BASKETBALL PAGE HERE</h1>
    </div>
  )
}

export default page
