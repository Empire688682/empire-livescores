import React from 'react';
import style from './SubNavbar.module.css';
import { subNavbarData } from '../data';
import Link from 'next/link';

const SubNavbar = () => {
    return (
        <div className={style.subNavbar}>
            <ul>
                {
                    subNavbarData.map((item, index) => (
                        <li key={index}>
                            <Link className={style.links} href={item.path}>{item.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SubNavbar
