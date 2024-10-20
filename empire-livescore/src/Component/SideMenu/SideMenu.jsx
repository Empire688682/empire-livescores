import React from 'react';
import style from './SideMenu.module.css';
import { LiaTimesSolid } from "react-icons/lia";
import { IoMdHome } from "react-icons/io";
import { BsTicketDetailed } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const SideMenu = () => {
    return (
        <div className={style.side_menu}>
            <div className={style.header}>
                <h1 className={style.logo}>E-Livescore</h1>
                <LiaTimesSolid className={style.menu_off_icon} />
            </div>
            <ul>
                <li>
                    <IoMdHome />
                    <a href="#">Home</a>
                </li>
                <li>
                    <BsTicketDetailed />
                    <a href="#">About</a>
                </li>
                <li>
                    <MdOutlinePhoneCallback />
                    <a href="#">Contact</a>
                </li>
                <li>
                    <IoMdContact />
                    <a href="#">Profile</a>
                </li>
                <li>
                    <FaQuestion />
                    <a href="#">FAQ</a>
                </li>
                <li>
                    <FiLogOut />
                    <a href="#">Logout</a>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu
