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
            const storedData = localStorage.getItem('football');
            if (storedData) {
                setData(JSON.parse(storedData));
            } else {
                console.log('No data found in localStorage');
            }
        }
    }, []);

    const fetchMatch = () => {
        if (data) {
            const foundMatch = data.find((match) => match.fixture.id === parseInt(id));
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

    console.log(match.fixture)


    return (
        <div className={style.matchContainer}>
            {
                match && match.fixture?
                    <>
                        <div className={style.header}>
                            <div>
                                <Image src={match.teams.home.logo} alt='logo' width={50} height={50} className={style.teamLogo} />
                                <p>{match.teams.home.name}</p>
                            </div>
                            <div className={style.scores}>
                                <p>Score:</p>
                                <p>1 - 2</p>
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
                                    <h4>HT</h4>
                                    <div>
                                        <p>1</p>
                                        <p>-</p>
                                        <p>0</p>
                                    </div>
                                </div>
                                <div className={style.full_time}>
                                    <h4>FT</h4>
                                    <div>
                                        <p>1</p>
                                        <p>-</p>
                                        <p>2</p>
                                    </div>
                                </div>
                            </ul>
                        </section>

                        <section className={style.section_stadium}>
                            <h2>Stadium Information</h2>
                            <p><strong>Name:</strong> stadium.name</p>
                            <p><strong>Location:</strong> stadium.location</p>
                            <p><strong>Capacity:</strong> stadium.capacity</p>
                            <div className={style.imageWrapper}>
                                <Image src={arsenal} alt='stadium' width={400} height={250} />
                            </div>
                        </section>

                        <section className={style.section_stadium}>
                            <h2>Refree Name</h2>
                            <p><strong>Refree:</strong> Olive</p>
                        </section>

                        <section className={style.section}>
                            <h2>Coaches</h2>
                            <div className={style.coaches}>
                                <div>
                                    <Image src={arsenal} alt='coach' width={50} height={50} />
                                    <p><strong>Coach:</strong> Daniel</p>
                                </div>
                                <div>
                                    <Image src={aston_Villa} alt='coach' width={50} height={50} />
                                    <p><strong>Coach:</strong> Juwon</p>
                                </div>
                            </div>
                        </section>
                    </>
                    :
                    <h3>Loading......</h3>
            }
        </div>
    );
}

export default page
