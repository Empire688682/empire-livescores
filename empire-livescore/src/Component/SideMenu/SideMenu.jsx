'use client'
import React from 'react';
import style from './SideMenu.module.css';
import { LiaTimesSolid } from "react-icons/lia";
import { IoMdHome } from "react-icons/io";
import { BsTicketDetailed } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Link from 'next/link';
import { useGlobalContext } from '../Context';

const SideMenu = () => {
    const { showSideMenu, setShowSideMenu } = useGlobalContext();
    return (
        <div className={showSideMenu ? `${style.side_menu} ${style.display}` : style.side_menu}>
            <div className={style.header}>
                <h1 className={style.logo}>E-Livescore</h1>
                <LiaTimesSolid onClick={() => setShowSideMenu(false)} className={style.menu_off_icon} />
            </div>
            <ul>
                <Link className={style.link} href="/">
                    <IoMdHome className={style.icon} />
                    <p>Home</p>
                </Link>
                <Link className={style.link} href="/about">
                    <BsTicketDetailed className={style.icon} />
                    <p>About</p>
                </Link>
                <Link className={style.link} href="/contact">
                    <MdOutlinePhoneCallback className={style.icon} />
                    <p>Contact</p>
                </Link>
                <Link className={style.link} href="/profile">
                    <IoMdContact className={style.icon} />
                    <p>Profile</p>
                </Link>
                <Link className={style.link} href="/faq">
                    <FaQuestion className={style.icon} />
                    <p>FAQ</p>
                </Link>
                <li>
                    <FiLogOut className={style.icon} />
                    <p>Logout</p>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu
