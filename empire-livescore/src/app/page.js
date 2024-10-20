import FootballCom from '@/Component/FootballCom/FootballCom';
import MainDate from '@/Component/MainDate/MainDate';
import React from 'react';
import style from './page.module.css';

const page = () => {
  return (
    <div className={style.page}>
      <MainDate/>
      <FootballCom/>
    </div>
  )
}

export default page
