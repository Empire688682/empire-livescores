import React from 'react';
import style from './newsId.module.css';
import SingleNewsCom from '@/Component/SingleNewsCom/SingleNewsCom';

const page = () => {
  return (
    <div className={style.single_news}>
      <h1>
        <SingleNewsCom/>
      </h1>
    </div>
  )
}

export default page
