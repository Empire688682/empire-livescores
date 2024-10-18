import React from 'react';
import style from './hockey.module.css'
import MainDate from '@/Component/MainDate/mainDate';

const page = () => {
  return (
    <div className={style.hockey}>
      <MainDate/>
      <h1>HOCKEY PAGE HERE</h1>
    </div>
  )
}

export default page
