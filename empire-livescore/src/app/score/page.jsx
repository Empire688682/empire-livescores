import React from 'react'
import style from './score.module.css';
import FootballCom from '@/Component/FootballCom/FootballCom';
import MatchAfter from '@/Component/MatchAfter/MatchAfterBasket';

const page = () => {
  return (
    <div className={style.scores}>
      <FootballCom/>
      <MatchAfter/>
    </div>
  )
}

export default page
