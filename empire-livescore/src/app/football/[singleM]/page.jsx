'use client'
import React, { useEffect, useState } from 'react';
import style from './singleM.module.css';
import Image from 'next/image';
import arsenal from '../../../public/arsenal.png';
import aston_Villa from '../../../public/aston-villa.png';


const page = () => {
    const [match, setMatch] = useState(null);
    
    useEffect(()=>{
        if(typeof window !== "undefined"){
            setMatch(JSON.parse(localStorage.getItem("football")))
        }
    },[])
    return (
        <div className={style.matchContainer}>
            <div className={style.header}>
                <div>
                <Image src={arsenal} alt='logo' width={50} height={50} className={style.teamLogo} />
                <p>homeTeam</p>
                </div>
                <div className={style.scores}>
                <p>Score:</p>
                <p>1 - 2</p>
                </div>
                <div>
                <Image src={aston_Villa} alt='logo' width={50} height={50} className={style.teamLogo} />
                <p>awayTeam</p>
                </div>
            </div>

            <section className={style.section}>
                <h2>Match Statistics</h2>
                <ul className={style.statsList}>
                        <li>
                            <strong>shoot:</strong> <p>stat.home</p> - <p>stat.away</p>
                        </li>
                </ul>
            </section>

            <section className={style.section}>
                <h2>Stadium Information</h2>
                <p><strong>Name:</strong> stadium.name</p>
                <p><strong>Location:</strong> stadium.location</p>
                <p><strong>Capacity:</strong> stadium.capacity</p>
                <div className={style.imageWrapper}>
                    <Image src={arsenal} alt='stadium' width={400} height={250} />
                </div>
            </section>

            <section className={style.section}>
                <h2>Coaches</h2>
                <div className={style.coaches}>
                <div>
                    <p><strong>Coach:</strong> Daniel</p>
                    <Image src={arsenal} alt='coach' width={50} height={50} />
                </div>
                <div>
                    <p><strong>Coach:</strong> Juwon</p>
                    <Image src={aston_Villa} alt='coach' width={50} height={50} />
                </div>
                </div>
            </section>
        </div>
    );
}

export default page
