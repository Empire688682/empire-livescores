import React from 'react';
import style from './football.module.css';
import MainDate from '@/Component/MainDate/MainDate';
import MatchAfter from '@/Component/MatchAfter/MatchAfter';
import LeagueCom from '@/Component/League/LeagueCom';

const page = () => {
  return (
    <div className={style.football}>
      <MainDate/>
      <LeagueCom/>
      <MatchAfter/>
    </div>
  )
}

export default page
