import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="ყველაზე მოთხოვნადი" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img='https://i.imgur.com/4nomS7B.jpg'
          productName="ფანერა 3მმ"
          price="28.00"
          color="I/II ხარისხი"
          badge={false}
          des="1/2 ხარისხის ფანერა 3მმ სისქის 1525 x 1525mm"
        />
        <Product
          _id="1012"
          img="https://i.imgur.com/2oOR2D3.png"
          productName="ლამინირებული ფანერა"
          price="93.00"
          color="1250 x 2500 x 18მმ"
          badge={false}
          des="ხარისხი: 1/1"
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Household materials"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Travel Bag"
          price="220.00"
          color="Black"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default BestSellers;
