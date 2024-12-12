import React from "react";
import style from "./news.module.css";
import NewsCom from "@/Component/NewsCom/NewsCom";

const page = () => {
  return (
    <div className={style.news}>
      <NewsCom />
    </div>
  );
};

export default page;
