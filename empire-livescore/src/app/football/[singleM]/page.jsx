import React from 'react';
import style from './singleM.module.css';
import Image from 'next/image';

const page = () => {
    return (
        <div className={style.matchContainer}>
            <div className={style.header}>
                <Image src={`/images/${homeTeam.logo}`} alt={`${homeTeam.name} logo`} width={50} height={50} className={style.teamLogo} />
                <h1>{homeTeam.name} vs {awayTeam.name}</h1>
                <Image src={`/images/${awayTeam.logo}`} alt={`${awayTeam.name} logo`} width={50} height={50} className={style.teamLogo} />
            </div>
            <p>Score: {score.home} - {score.away}</p>

            <section className={style.section}>
                <h2>Match Statistics</h2>
                <ul className={style.statsList}>
                    {stats.map((stat, index) => (
                        <li key={index}>
                            <strong>{stat.type}:</strong> {stat.home} - {stat.away}
                        </li>
                    ))}
                </ul>
            </section>

            <section className={style.section}>
                <h2>Stadium Information</h2>
                <p><strong>Name:</strong> {stadium.name}</p>
                <p><strong>Location:</strong> {stadium.location}</p>
                <p><strong>Capacity:</strong> {stadium.capacity}</p>
                <div className={style.imageWrapper}>
                    <Image src={`/images/${stadium.image}`} alt={`${stadium.name}`} width={400} height={250} />
                </div>
            </section>

            <section className={style.section}>
                <h2>Coaches</h2>
                <div>
                    <p><strong>Home Coach:</strong> {coach.home}</p>
                    <Image src={`/images/${coach.homeImage}`} alt={`${coach.home} image`} width={100} height={100} />
                </div>
                <div>
                    <p><strong>Away Coach:</strong> {coach.away}</p>
                    <Image src={`/images/${coach.awayImage}`} alt={`${coach.away} image`} width={100} height={100} />
                </div>
            </section>
        </div>
    );
}

export default page
