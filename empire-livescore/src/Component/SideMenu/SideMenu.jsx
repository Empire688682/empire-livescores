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
import { useRouter } from 'next/navigation';

const SideMenu = () => {
    const router = useRouter();
    const { showSideMenu, setShowSideMenu } = useGlobalContext();
    const handleLogoClick = () =>{
        router.push("/");
        setShowSideMenu(false)
    }
    return (
        <div className={showSideMenu ? `${style.side_menu} ${style.display}` : style.side_menu}>
            <div className={style.header}>
                <h1 className={style.logo} onClick={handleLogoClick}>E-Livescore</h1>
                <LiaTimesSolid onClick={() => setShowSideMenu(false)} className={style.menu_off_icon} />
            </div>
            <ul>
                <Link onClick={() => setShowSideMenu(false)} className={style.link} href="/">
                    <IoMdHome className={style.icon} />
                    <p>Home</p>
                </Link>
                <Link onClick={() => setShowSideMenu(false)} className={style.link} href="/about">
                    <BsTicketDetailed className={style.icon} />
                    <p>About</p>
                </Link>
                <Link onClick={() => setShowSideMenu(false)} className={style.link} href="/contact">
                    <MdOutlinePhoneCallback className={style.icon} />
                    <p>Contact</p>
                </Link>
                <Link onClick={() => setShowSideMenu(false)} className={style.link} href="/faq">
                    <FaQuestion className={style.icon} />
                    <p>FAQ</p>
                </Link>
            </ul>
        </div>
    )
}

export default SideMenu
