'use client';
import React, { useState } from 'react';
import style from './Navbar.module.css'
import { MdOutlineMenuOpen } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaRegNewspaper } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import Image from 'next/image';
import search_icon from '../../public/search_icon.svg';
import { useGlobalContext } from '../Context';
import SideMenu from '../SideMenu/SideMenu';
import Link from 'next/link';

const Navbar = () => {
    const [menu, setMenu] = useState("scores");
    const { setShowSidebar,setShowSideMenu, url } = useGlobalContext();
    return (
        <div className={style.navbar}>
            <div className={style.left_col}>
                <div className={style.menu_Con}>
                    <MdOutlineMenuOpen onClick={() => setShowSideMenu(true)} className={style.menu_icon} />
                </div>
                <Link href="/" className={style.logo}>
                    E-Livescore
                </Link>
                <SideMenu/>
            </div>
            <div className={style.right_col}>
                <ul>
                    <Link href='/score' onClick={() => setMenu("scores")} className={menu === "scores" ? style.active : style.menu}> <IoIosFootball className={style.menu_icon} /> Scores </Link>
                    <Link href='/favourite' onClick={() => setMenu("favourite")} className={menu === "favourite" ? style.active : style.menu}> <CiStar className={style.menu_icon} /> Favourite </Link>
                    <Link href='/news' onClick={() => setMenu("news")} className={menu === "news" ? style.active : style.menu}> <FaRegNewspaper className={style.menu_icon} /> News </Link>
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
