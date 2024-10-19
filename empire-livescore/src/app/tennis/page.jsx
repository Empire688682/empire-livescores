import React from 'react';
import style from'./tennis.module.css';
import MainDate from '@/Component/MainDate/mainDate';
import FootballCom from '@/Component/FootballCom/FootballCom';

const page = () => {
  return (
    <div className={style.tennis}>
      <MainDate/>
      <FootballCom/>
    </div>
  )
}

export default page
