'use client'
import React, { useState, useEffect } from 'react';
import style from './MatchAfter.module.css';
import Image from 'next/image';
import { CiStar } from "react-icons/ci";
import { useRouter } from 'next/navigation';
import { useGlobalContext } from '../Context';

const MatchAfterBasketball = ({ team1Logo, id, team2Logo, team1, team2, time, status, teamGoal1, teamGoal2 }) => {
    const [basketFav, setBasketFav] = useState([]);
    const router = useRouter();
    const { fav,handleFavClick } = useGlobalContext();

    const handleClick = () => {
        if (id) {
            router.push(`/basketball/${id}`);
        } else {
            console.error("ID is undefined");
        }
    };
    // Log basketFav whenever it changes
    useEffect(() => {
        console.log(fav);
    }, [fav]);

    return (
        <div className={style.match_after}>
            <div className={style.left_Content} onClick={handleClick}>
                <div className={style.time}>
                    {
                        teamGoal1 !== null
                            ?
                            <>
                                <p>{teamGoal1} : {teamGoal2}</p>
                            </>
                            :
                            <p>{time}</p>
                    }
                    <p>{status}</p>
                </div>
                <div className={style.teams}>
                    <div className={style.team} id='team1'>
                        <div className={style.team_logo}>
                            <Image
                                src={team1Logo}
                                alt='Premier League'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                <CiStar 
                    onClick={() => handleFavClick(id)} 
                    className={`${style.star_icon} ${basketFav[id] ? style.active : ''}`} 
                />
            </div>
        </div>
    );
};

export default MatchAfterBasketball;
