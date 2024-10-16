import React from 'react';
import style from './SideBar.module.css';
import { IoSearchOutline } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className={style.side_bar}>
      <div className={style.header}>
        <label htmlFor="name"><IoSearchOutline /></label>
      <input type="text" name="name" id="name" placeholder='Search' />
      </div>
      <div className={`${style.colum} ${style.region}`}>
        
      </div>
    </div>
  )
}

export default SideBar
