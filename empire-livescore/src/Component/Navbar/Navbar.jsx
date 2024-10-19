'use client';
import React, { useState } from 'react';
import style from './Navbar.module.css'
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";

const Navbar = () => {
    const [menu, setMenu] = useState("scores");
  return (
    <div className={style.navbar}>
        <div className={style.left_col}>
            <div className={style.menu_Con}>
                <MdOutlineMenuOpen className={style.menu_icon}/>
            </div>
            <div className={style.logo}>E-Livescore</div>
        </div>
        <div className={style.right_col}>
            <ul>
                <li onClick={() => setMenu("scores")} className={menu === "scores" ? style.active : ""}> <IoIosFootball className={style.menu_icon} /> Scores </li>
                <li onClick={()=> setMenu("favourite")} className={menu === "favourite" ? style.active : ""}> <MdFavoriteBorder className={style.menu_icon} /> Favourite </li>
                <li onClick={() => setMenu("news")} className={menu === "news" ? style.active : ""}> <FaRegNewspaper className={style.menu_icon} /> News </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar
