'use client'
import React from 'react';
import style from './NewsCom.module.css';
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';
import news_Img from '../../public/news_img.jpg';
import NewsAPI from 'newsapi';

const NewsCom = () => {
    return (
        <div
            className={style.news_container}>
            <div className={style.header}>
                <h3>News</h3>
                <IoIosArrowForward className={style.header_icon} />
            </div>
            <div className={style.content}>
                <div className={style.img_Col}>
                    <Image src={news_Img} alt='news' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <div className={style.text_Col}>
                    <div className={style.text_title}>
                    Barcelona vs Bayern Munich predictions: Euro big boys to scrap for a draw
                    </div>
                    <div className={style.text_sub_title_time}>
                        <div className={style.text_sub_title}>
                            <p>Barcelona</p>
                            <p>Arsenal</p>
                        </div>
                        <p className={style.time}>
                            10 minutes ago
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCom
