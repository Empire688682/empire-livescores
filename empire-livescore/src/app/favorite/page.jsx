"use client";
import React, { useEffect, useState } from "react";
import style from "./favorite.module.css";
import { CiStar } from "react-icons/ci";
import LeagueCom from "@/Component/League/LeagueCom";
import { useGlobalContext } from "@/Component/Context";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const { handleCountryClick } = useGlobalContext();
  const [footballData, setFootballData] = useState([]);
  const [idsData, setIdsData] = useState([]);

  const handleMatchClick = (id) => {
    router.push(`/football/${id}`);
    console.log("Id:", id);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setFootballData(localStorage.getItem("football") || []);
      setIdsData(localStorage.getItem("footballFav") || []);
    }
  }, []);
  console.log("Ids", idsData);
  console.log("fooballdata:", footballData);
  return (
    <div className={style.favorite}>
      <p></p>
    </div>
  );
};

export default Page;
