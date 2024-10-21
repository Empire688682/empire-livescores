import React from 'react';
import style from './hockey.module.css'
import MainDate from '@/Component/MainDate/mainDate';
import LeagueCom from '@/Component/League/LeagueCom';
import MatchAfter from '@/Component/MatchAfter/MatchAfter';

const page = () => {
  return (
    <div className={style.hockey}>
      <MainDate/>
      <LeagueCom/>
      <MatchAfter/>
    </div>
  )
}

export default page
