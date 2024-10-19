import React from 'react';
import style from './cricket.module.css';
import MainDate from '@/Component/MainDate/mainDate';
import FootballCom from '@/Component/FootballCom/FootballCom';

const page = () => {
  return (
    <div className={style.cricket}>
      <MainDate/>
      <FootballCom/>
    </div>
  )
}

export default page
