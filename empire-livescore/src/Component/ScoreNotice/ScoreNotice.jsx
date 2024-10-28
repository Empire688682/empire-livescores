import React from 'react';
import style from './ScoreNotice.module.css';
import { FaInfoCircle } from 'react-icons/fa';

const ScoreNotice = () => {
    return (
      <div className={styles.noticeContainer}>
        <FaInfoCircle className={style.icon} />
        <div className={style.textContainer}>
          <h3>Important Notice</h3>
          <p>
            We strive to keep our live scores accurate and up-to-date, providing real-time results with every refresh. 
            Due to the free API we’re currently using, detailed match data may be limited. 
            However, rest assured that the <strong>scores are always accurate</strong> and will update when you refresh!
          </p>
          <p>
            We appreciate your understanding and are working towards enhancing your experience. 
            Stay tuned for future improvements!
          </p>
        </div>
      </div>
    );
  };
  
  export default ScoreNotice;
