import React from "react";
import style from "./RelatedNews.module.css";
import Image from "next/image";
import news_Img from "../../public/news_img.jpg";

const RelatedNews = () => {
  return (
    <div className={style.related_news}>
      <h3>Related News</h3>
      <div className={style.content}>
        <div className={style.img_Col}>
          <Image
            src={news_Img}
            alt="news"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={style.text_Col}>
          <div className={style.text_title}>
            Barcelona vs Bayern Munich predictions: Euro big boys to scrap for a
            draw
          </div>
          <div className={style.text_sub_title_time}>
            <div className={style.text_sub_title}>
              <p>Barcelona</p>
              <p>Arsenal</p>
            </div>
            <p className={style.time}>10 minutes ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedNews;
