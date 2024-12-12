"use client";
import React from "react";
import style from "./SubNavbar.module.css";
import { subNavbarData } from "../data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SubNavbar = () => {
  const pathName = usePathname();

  return (
    <div className={style.subNavbar}>
      <ul>
        {subNavbarData.map((item) => (
          <li key={item.title}>
            <Link
              className={
                pathName === item.path
                  ? `${style.link} ${style.active}`
                  : style.link
              }
              href={item.path}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubNavbar;
