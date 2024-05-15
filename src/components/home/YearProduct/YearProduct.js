import React from "react";
import { Link } from "react-router-dom";
import { productOfTheYear } from "../../../assets/images";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";

const YearProduct = () => {
  return (
    <Link to="/knlinkeri">
      <div style={{width: '100%', }}>
        <Image
          className="w-full h-full object-cover hidden md:inline-block"
          imgSrc='https://i.imgur.com/Myg8dqO.png'
        />
        
        </div>
    </Link>
  );
};

export default YearProduct;
