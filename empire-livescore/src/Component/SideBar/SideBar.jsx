'use client'
import React from 'react';
import style from './SideBar.module.css';
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { sideBarData } from '../data';
import Image from 'next/image';
import { useGlobalContext } from '../Context';

const SideBar = () => {
    const {showSidebar, setShowSidebar, handleCountryClick, league, setLeague} = useGlobalContext();

    const handleSidebarClick = (country) =>{
        handleCountryClick(country);
        setShowSidebar(false)
    }
    return (
        <div className={showSidebar? `${style.side_bar} ${style.display}`:style.side_bar}>
            <div className={style.header}>
                <div className={style.icon} onClick={()=>setShowSidebar(false)}>
                    <IoIosArrowForward />
                </div>
                <label htmlFor="name"><IoSearchOutline /></label>
                <input type="text" name="name" id="name" placeholder='Search' />
                <div className={style.icon}>
                    <LiaTimesSolid onClick={()=>setShowSidebar(false)} />
                </div>
            </div>
            <div className={`${style.colum} ${style.region}`}>
                <div className={style.colum_header}>
                    <p>REGION</p>
                    <div className={style.icon}>
                        <IoIosArrowForward />
                    </div>
                </div>
                <div className={style.colum_content}>
                    {
                        sideBarData[0].regions.map((region) => (
                            <div key={region.title} className={style.colum_cart} onClick={()=>handleSidebarClick(region.title)}>
                                <span className={`fi ${region.icon}`}></span>
                                <span className={style.colum_title}>
                                    {region.title}
                                </span>
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className={`${style.colum} ${style.team}`}>
                <div className={style.colum_header}>
                    <p>Teams</p>
                    <div className={style.icon}>
                        <IoIosArrowForward />
                    </div>
                </div>
                <div className={style.colum_content}>
                    {
                        sideBarData[1].teams.map((team) => (
                            <div key={team.title} className={style.colum_cart}>
                                <div className={style.imgCon}>
                                    <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={team.img} alt='Logo' fill />
                                </div>
                                <div className={style.title_Con}>
                                    <span className={style.colum_title}>
                                        {team.title}
                                    </span>
                                    <span className={style.colum_league}>
                                        {team.league}
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={`${style.colum} ${style.competition}`}>
                <div className={style.colum_header}>
                    <p>Competitions</p>
                    <div className={style.icon}>
                        <IoIosArrowForward />
                    </div>
                </div>
                <div className={style.colum_content}>
                    {
                        sideBarData[2].competitions.map((competition) => (
                            <div key={competition.title} className={style.colum_cart} onClick={()=> setLeague(competition.title)}>
                                <div className={style.imgCon}>
                                    <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={competition.img} alt='Logo' fill />
                                </div>
                                <div className={style.title_Con}>
                                    <span className={style.colum_title}>
                                        {competition.title}
                                    </span>
                                    <span className={style.colum_league}>
                                        {competition.country}
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SideBar
