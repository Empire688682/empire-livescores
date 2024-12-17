"use client";
import React from "react";
import style from "./SubNavbar.module.css";
import { subNavbarData } from "../data";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const SubNavbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className={style.subNavbar}>
      <ul>
        {subNavbarData.map((item) => (
          <li
            key={item.title}
            onClick={() => router.push(`${item.path}`)}
            className={
              pathName === item.path
                ? `${style.link} ${style.active}`
                : style.link
            }
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubNavbar;
