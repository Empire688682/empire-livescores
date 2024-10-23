import React from 'react';
import style from './FootballCom.module.css';
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";
import premier_league from '../../public/premier-league.png';

const FootballCom = () => {
  return (
    <div className={style.football}>
      <div className={style.header}>
        <div className={style.left_Content}>
        <div className={style.img_Container}>
          <Image
            src={premier_league}
            alt='Premier League'
            ssizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            />
        </div>
        <div className={style.title}>
          <h3>Premier League</h3>
          <p>England</p>
        </div>
        </div>
        <div className={style.right_Content}>
          <IoIosArrowForward className={style.header_icon}/>
        </div>
      </div>
    </div>
  )
}

export default FootballCom
