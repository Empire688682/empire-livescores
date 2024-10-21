import React from 'react';
import style from'./tennis.module.css';
import MainDate from '@/Component/MainDate/mainDate';
import FootballCom from '@/Component/FootballCom/FootballCom';
import LeagueCom from '@/Component/League/LeagueCom';
import MatchAfter from '@/Component/MatchAfter/MatchAfter';

const page = () => {
  return (
    <div className={style.tennis}>
      <MainDate/>
      <LeagueCom/>
      <MatchAfter/>
    </div>
  )
}

export default page
