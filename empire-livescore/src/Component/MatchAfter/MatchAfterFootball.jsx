'use client'
import React, { useState } from 'react';
import style from './MatchAfter.module.css';
import Image from 'next/image';
import manchester from '../../public/manchester_united.png';
import chelsea from '../../public/chelsea.png';
import { CiStar } from "react-icons/ci";
import { useRouter } from 'next/navigation';

const MatchAfterFootball = ({team1Logo, timeCount, id, team2Logo, team1, team2, time, status, teamGoal1, teamGoal2 }) => {
    const timeOnly = new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const [starClick, setStarClick] = useState(false);
    const router = useRouter();
    const handleClick = () => {
        if (id) {
          router.push(`/football/${id}`);
        } else {
          console.error("ID is undefined");
        }
      };

    return (
        <div className={style.match_after} onClick={handleClick}>
            <div className={style.left_Content}>
                <div className={style.time}>
                    {
                        teamGoal1 !== null
                            ?
                            <>
                                <p>{teamGoal1} : {teamGoal2}</p>
                            </>
                            :
                            <p>{timeOnly}</p>
                    }
                    {
                        timeCount !== null && status !== 'FT'
                            ?
                            <p>{timeCount}'</p>
                            :
                            null
                    }
                    <p>{status}</p>
                </div>
                <div className={style.teams}>
                    <div className={style.team} id='team1'>
                        <div className={style.team_logo}>
                            <Image
                                src={team1Logo}
                                alt='Premier League'
                                ssizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                fill
                            />
                        </div>
                        <div className={style.team_name}>
                            {team1}
                        </div>
                    </div>
                    <div className={style.team} id='team2'>
                        <div className={style.team_logo}>
                            <Image
                                src={team2Logo}
                                alt='Premier League'
                                ssizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                fill
                            />
                        </div>
                        <div className={style.team_name}>
                            {team2}
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.right_Content}>
                <CiStar onClick={() => setStarClick(!starClick)} className={`${style.star_icon} ${starClick ? style.active : ''}`} />
            </div>
        </div>
    )
}

export default MatchAfterFootball
