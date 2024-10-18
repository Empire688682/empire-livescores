import React from 'react';
import style from './cricket.module.css';
import MainDate from '@/Component/MainDate/mainDate';

const page = () => {
  return (
    <div className={style.cricket}>
      <MainDate/>
      <h1>CRICKETPAGE HERE</h1>
    </div>
  )
}

export default page
