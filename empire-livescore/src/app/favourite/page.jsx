import React from "react";
import style from "./favourite.module.css";
import FavouriteCom from "@/Component/FavouriteCom/FavouriteComp";

const page = () => {
  return (
    <div className={style.favourite}>
      <FavouriteCom />
    </div>
  );
};

export default page;
