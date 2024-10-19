'use client'
import React, { useState } from 'react';
import style from './MatchAfter.module.css';
import Image from 'next/image';
import manchester from '../../public/manchester_united.png';
import chelsea from '../../public/chelsea.png';
import { CiStar } from "react-icons/ci";

const MatchAfter = () => {
    const [starClick, setStarClick] = useState(false);
    return (
        <div className={style.match_after}>
            <div className={style.left_Content}>
                <div className={style.time}>
                    <p>15:30</p>
                </div>
                <div className={style.teams}>
                    <div className={style.team}>
                        <div className={style.team_logo}>
                            <Image
                                src={manchester}
                                alt='Premier League'
                                ssizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                fill
                            />
                        </div>
                        <div className={style.team_name}>
                            Manchester United
                        </div>
                    </div>
                    <div className={style.team}>
                        <div className={style.team_logo}>
                            <Image
                                src={chelsea}
                                alt='Premier League'
                                ssizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                fill
                            />
                        </div>
                        <div className={style.team_name}>
                            Chelsea
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

export default MatchAfter
