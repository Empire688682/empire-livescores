import React from 'react';
import style from './SingleNewsCom.module.css';
import Image from 'next/image';
import author_Img from '../../public/author_img.webp';
import news_banner from '../../public/news_img.jpg';
import NewsCom from '../NewsCom/NewsCom';

const SingleNewsCom = () => {
    return (
        <div className={style.single_news}>
            <div className={style.header}>
                <div className={style.left_header}>
                    <div className={style.img_Container}>
                        <Image
                            src={author_Img}
                            alt="news"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <div className={style.author}>
                        <p>John Doe</p>
                        <span>Spotlight</span>
                    </div>
                </div>
                <div className={style.right_header}>
                    <div className={style.date}>
                        <p>21/10/2024</p>
                        <span>09:30</span>
                    </div>
                </div>
            </div>
            <div className={style.news_banner}>
                <Image
                    src={news_banner}
                    alt="news"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className={style.content}>
                <h3>- Barcelona vs Bayern Munich predictions: Euro big boys to scrap for a draw</h3>
                <h4> - Recommended bet: Draw</h4>
                <p>Barcelona vs Bayern Munich predictions: Euro big boys to scrap for a draw</p>
                <p>Both sides have won one, lost one in the revamped competition so far but they could end up having to settle for a point from the big midweek showdown.</p>
                <p>This mouth-watering Euro clash sees new Barca boss Hansi Flick go up against his old club, while Barca striker Robert Lewandowski faces his former side in a matchday three game laden with sub-plots.</p>
            </div>
            <div className={style.related_news}>
                <NewsCom />
            </div>
        </div>
    )
}

export default SingleNewsCom
