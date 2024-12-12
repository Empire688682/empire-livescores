import React from "react";
import style from "./faq.module.css";

const faq = () => {
  return (
    <div className={style.faqContainer}>
      <h1 className={style.title}>Frequently Asked Questions (FAQ)</h1>
      <div className={style.faqItem}>
        <h2 className={style.question}>What is E-Livescore?</h2>
        <p className={style.answer}>
          E-Livescore is a real-time football livescore web app that provides
          instant updates on live match scores, match statistics, and other
          important details about football games happening worldwide.
        </p>
      </div>
      <div className={style.faqItem}>
        <h2 className={style.question}>How often are the scores updated?</h2>
        <p className={style.answer}>
          Scores on E-Livescore are updated in real-time, so you will always get
          the latest information on matches as soon as events like goals, cards,
          and substitutions happen.
        </p>
      </div>
      <div className={style.faqItem}>
        <h2 className={style.question}>Can I follow my favorite teams?</h2>
        <p className={style.answer}>
          Yes, you can follow your favorite teams and receive instant
          notifications on their match updates, ensuring you never miss any
          action.
        </p>
      </div>
      <div className={style.faqItem}>
        <h2 className={style.question}>Is E-Livescore free to use?</h2>
        <p className={style.answer}>
          Absolutely! E-Livescore is completely free to use. You can access all
          live scores, match statistics, and updates without any cost.
        </p>
      </div>
      <div className={style.faqItem}>
        <h2 className={style.question}>
          What leagues and tournaments do you cover?
        </h2>
        <p className={style.answer}>
          We cover a wide range of football leagues and tournaments worldwide,
          including top leagues like the Premier League, La Liga, Serie A,
          Bundesliga, and many more.
        </p>
      </div>
    </div>
  );
};

export default faq;
