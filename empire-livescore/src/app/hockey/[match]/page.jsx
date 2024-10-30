'use client'
import React, { useEffect, useState } from 'react';
import style from './Match.module.css';
import Image from 'next/image';
import arsenal from '../../../public/arsenal.png';
import aston_Villa from '../../../public/aston-villa.png';
import ScoreNotice from '@/Component/ScoreNotice/ScoreNotice';
import { LiaTimesSolid } from "react-icons/lia";
import { useParams } from 'next/navigation';


const page = () => {
    const [data, setData] = useState(null);
    const [match, setMatch] = useState({});
    const [noticeClear, setNoticeClear] = useState(false);
    const param = useParams();
    const id = param.match;


    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedData = localStorage.getItem('hockey');
            if (storedData) {
                setData(JSON.parse(storedData));
            } else {
                console.log('No data found in localStorage');
            }
        }
    }, []);

    const fetchMatch = () => {
        if (data) {
            const foundMatch = data.find((match) => match.id === parseInt(id));
            if (foundMatch) {
                setMatch(foundMatch);
                console.log(foundMatch);
            }
            else {
                console.log("No match found")
            }
        }
        else {
            console.log("No match found with the given ID");
        }
    }

    useEffect(() => {
        fetchMatch();
    }, [data]);

    console.log(match)


    return (
        <div className={style.matchContainer}>
            {
                match && match.country ?
                    <>
                        <div className={style.header}>
                            <div>
                                <Image src={match.teams.home.logo} alt='logo' width={50} height={50} className={style.teamLogo} />
                                <p>{match.teams.home.name}</p>
                            </div>
                            <div className={style.scores}>
                                <p>{match.scores.home.total} - {match.scores.away.total}</p>
                                <p style={{ color: "tomato" }}>
                                    {match.status.short === "FT" ? "FT" : match.status.elapsed}
                                    {match.status.short !== "FT" ? `${match.status.short}` : match.status.elapsed}
                                </p>
                                <p style={{ color: "tomato" }}>
                                {match.status.short === "HT" ? "HT" : null}
                                </p>
                            </div>
                            <div>
                                <Image src={match.teams.away.logo} alt='logo' width={50} height={50} className={style.teamLogo} />
                                <p>{match.teams.away.name}</p>
                            </div>
                        </div>

                        <section className={noticeClear ? `${style.notice_section} ${style.clear}` : style.notice_section}>
                            <LiaTimesSolid className={style.cross_icon} onClick={() => setNoticeClear(true)} />
                            <ScoreNotice />
                        </section>

                        <section className={style.section}>
                            <h2>Match Statistics</h2>
                            <ul className={style.statsList}>
                                <div className={style.half_time}>
                                    <h4>Qt-1</h4>
                                    <div>
                                        <p>{match.scores.home.quarter_1}</p>
                                        <p>-</p>
                                        <p>{match.scores.away.quarter_1}</p>
                                    </div>
                                </div>
                                <div className={style.half_time}>
                                    <h4>Qt-2</h4>
                                    <div>
                                        <p>{match.scores.home.quarter_2}</p>
                                        <p>-</p>
                                        <p>{match.scores.away.quarter_2}</p>
                                    </div>
                                </div>
                                <div className={style.half_time}>
                                    <h4>Qt-3</h4>
                                    <div>
                                        <p>{match.scores.home.quarter_3}</p>
                                        <p>-</p>
                                        <p>{match.scores.away.quarter_3}</p>
                                    </div>
                                </div>
                                <div className={style.half_time}>
                                    <h4>Qt-4</h4>
                                    <div>
                                        <p>{match.scores.home.quarter_4}</p>
                                        <p>-</p>
                                        <p>{match.scores.away.quarter_4}</p>
                                    </div>
                                </div>
                                {
                                    match.scores.home.total !== null && <div className={style.full_time}>
                                        {match.status.short !== "FT" ? <h4>Total</h4>:<h4>FT</h4>}
                                        <div>
                                            <p>{match.scores.home.total}</p>
                                            <p>-</p>
                                            <p>{match.scores.away.total}</p>
                                        </div>
                                    </div>
                                }
                            </ul>
                        </section>

                        <section className={style.section_stadium}>
                            <h2>Stadium Information</h2>
                            <p><strong>Name:</strong> {match.venue}</p>
                            <p><strong>Location:</strong> {match.venue}</p>
                        </section>

                        <section className={style.section}>
                            <h2>Coaches</h2>
                            <div className={style.coaches}>
                                <div>
                                    <Image src={match.teams.home.logo} alt='coach' width={50} height={50} />
                                    <p><strong>Coach:</strong> Not covered</p>
                                </div>
                                <div>
                                    <Image src={match.teams.away.logo} alt='coach' width={50} height={50} />
                                    <p><strong>Coach:</strong> Not covered</p>
                                </div>
                            </div>
                        </section>
                    </>
                    :
                    <p className={style.loadingText}>Loading</p>
            }
        </div>
    );
}

export default page
