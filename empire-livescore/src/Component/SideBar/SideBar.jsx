import React from 'react';
import style from './SideBar.module.css';
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { sideBarData } from '../data';
import Image from 'next/image';

const SideBar = () => {
    return (
        <div className={style.side_bar}>
            <div className={style.header}>
                <label htmlFor="name"><IoSearchOutline /></label>
                <input type="text" name="name" id="name" placeholder='Search' />
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
                        sideBarData[0].regions.map((region)=>(
                            <div key={region.title} className={style.colum_cart}>
                                  <span class={`fi ${region.icon}`}></span>
                                <span className={style.colum_title}>
                                    {region.title}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={`${style.colum} ${style.region}`}>
                <div className={style.colum_header}>
                    <p>Teams</p>
                    <div className={style.icon}>
                        <IoIosArrowForward />
                    </div>
                </div>
                <div className={style.colum_content}>
                    {
                        sideBarData[1].teams.map((team)=>(
                            <div key={team.title} className={style.colum_cart}>
                                  <div className={style.imgCon}>
                                    <Image src={team.img} alt='Logo' fill/>
                                  </div>
                                <span className={style.colum_title}>
                                    {team.title}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SideBar
