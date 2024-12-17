import React from "react";
import style from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={style.aboutContainer}>
      <h1 className={style.title}>About E-Livescore</h1>
      <p className={style.description}>
        Welcome to <strong>E-Livescore</strong> – your go-to destination for
        real-time football scores and live match updates. Whether you are a
        passionate football fan or just catching up on your favorite team, our
        web app provides instant access to the latest scores, match statistics,
        and highlights from leagues and tournaments worldwide.
      </p>
      <p className={style.description}>
        Designed with the user in mind, E-Livescore offers a seamless experience
        with up-to-the-minute updates, ensuring that you never miss a moment of
        the action. Our app delivers the same fast-paced live coverage you would
        expect from the most popular livescore platforms, but with a more
        personalized touch and easy-to-navigate interface.
      </p>
      <p className={style.description}>
        With <strong>E-Livescore</strong>, you can:
      </p>
      <ul className={style.featuresList}>
        <li>
          Stay updated with live scores from top football leagues and
          competitions.
        </li>
        <li>
          Get detailed match statistics, including goals, assists, cards, and
          substitutions.
        </li>
        <li>
          Track your favorite teams and receive real-time notifications on match
          events.
        </li>
        <li>View fixtures, results, and league standings all in one place.</li>
        <li>Access news and insights about your favorite players and clubs.</li>
      </ul>
      <p className={style.description}>
        Our mission is to make following football easy and enjoyable for
        everyone, from casual viewers to hardcore fans. E-Livescore is designed
        to keep you informed with accurate data, so you can focus on the game
        without missing a beat.
      </p>
      <p className={style.description}>
        Thank you for choosing <strong>E-Livescore</strong> as your reliable
        source for football updates. We are committed to delivering the best
        livescore experience, helping you stay connected to the world of
        football, anytime, anywhere.
      </p>
    </div>
  );
};

export default AboutPage;
