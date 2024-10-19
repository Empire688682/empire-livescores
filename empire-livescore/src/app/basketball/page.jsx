import React from 'react';
import style from './basketball.module.css';
import MainDate from '@/Component/MainDate/mainDate';
import FootballCom from '@/Component/FootballCom/FootballCom';

const page = () => {
  return (
    <div className={style.basketball}>
      <MainDate />
      <FootballCom/>
    </div>
  )
}

export default page
