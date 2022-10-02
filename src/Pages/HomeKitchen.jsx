import React from "react";
import { SubPage } from "../Components/SubPage";
import menudata from "./PageData/HomeKitchenFilterMenuData.json";
import cartdata from "./PageData/KitchenWare.json";
export const HomeKitchen = () => {
  return (
    <SubPage
      menudata={menudata}
      cartdata={cartdata}
      headerImage={
        "https://www.jiomart.com/images/category/1687/home-kitchen-20220519.jpeg"
      }
    />
  );
};
