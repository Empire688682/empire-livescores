'use client';
import React, { useState } from 'react';
import style from './Navbar.module.css'
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import Image from 'next/image';
import search_icon from '../../public/search_icon.svg';
import { useGlobalContext } from '../Context';
import SideMenu from '../SideMenu/SideMenu';

const Navbar = () => {
    const [menu, setMenu] = useState("scores");
    const { setShowSidebar,setShowSideMenu, setSideMenu } = useGlobalContext();
    return (
        <div className={style.navbar}>
            <div className={style.left_col}>
                <div className={style.menu_Con}>
                    <MdOutlineMenuOpen onClick={() => setShowSideMenu(true)} className={style.menu_icon} />
                </div>
                <div className={style.logo}>
                    E-Livescore
                </div>
                <SideMenu/>
            </div>
            <div className={style.right_col}>
                <ul>
                    <li onClick={() => setMenu("scores")} className={menu === "scores" ? style.active : ""}> <IoIosFootball className={style.menu_icon} /> Scores </li>
                    <li onClick={() => setMenu("favourite")} className={menu === "favourite" ? style.active : ""}> <MdFavoriteBorder className={style.menu_icon} /> Favourite </li>
                    <li onClick={() => setMenu("news")} className={menu === "news" ? style.active : ""}> <FaRegNewspaper className={style.menu_icon} /> News </li>
                </ul>
            </div>
            <div className={style.right_searchBar}>
                <Image
                    onClick={() => setShowSidebar(true)}
                    src={search_icon}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    fill
                />
            </div>
        </div>
    )
}

export default Navbar
