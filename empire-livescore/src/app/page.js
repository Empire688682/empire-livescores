import FootballCom from '@/Component/FootballCom/FootballCom';
import MainDate from '@/Component/MainDate/MainDate';
import React from 'react';
import style from './page.module.css';
import MatchAfter from '@/Component/MatchAfter/MatchAfter';

const page = () => {
  return (
    <div className={style.page}>
      <MainDate/>
      <FootballCom/>
      <MatchAfter/>
    </div>
  )
}

export default page
