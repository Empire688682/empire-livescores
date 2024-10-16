import React from 'react';
import style from './SubNavbar.module.css';
import { subNavbarData } from '../data';

const SubNavbar = () => {
    return (
        <div className='subNavbar'>
            <ul>
                {
                    subNavbarData.map((item, index) => (
                        <li key={index}>
                            <a href={item.path}>{item.title}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SubNavbar
