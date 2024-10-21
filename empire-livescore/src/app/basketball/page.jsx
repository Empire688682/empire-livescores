import React from 'react';
import style from './basketball.module.css';
import MainDate from '@/Component/MainDate/mainDate';
import MatchAfter from '@/Component/MatchAfter/MatchAfter';
import LeagueCom from '@/Component/League/LeagueCom';

const page = () => {
  return (
    <div className={style.basketball}>
      <MainDate />
      <LeagueCom/>
      <MatchAfter/>
    </div>
  )
}

export default page
