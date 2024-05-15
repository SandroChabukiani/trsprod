import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16" style={{marginTop: '2%'}}>
      <Heading  heading="ახალი პროდუქცია" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img='https://i.imgur.com/TliptvY.png'
            productName='ამსტერდამი 7 აგური'
            price="44.00"
            color="245х65x7მმ"
            badge={true}
            des="კლინკერის ფილა - ექსტერიერისა და ინტერიერის გაფორმების ნამდვილი ტრენდია.მისი პოპულარობა განპირობებულია ტექსტურის და ფერის მრავალფეროვნებით, ასევე პროდუქტის მაღალი სიმტკიცით და გამძლეობით."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img='https://i.imgur.com/YsU2c8S.png'
            productName='ამსტერდამი შეიდი აგური'
            price="250.00"
            color="245х65x7მმ"
            badge={true}
            des="კლინკერის ფილა - ექსტერიერისა და ინტერიერის გაფორმების ნამდვილი ტრენდია.მისი პოპულარობა განპირობებულია ტექსტურის და ფერის მრავალფეროვნებით, ასევე პროდუქტის მაღალი სიმტკიცით და გამძლეობით."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img='https://i.imgur.com/FH6R7Hm.png'
            productName='ამსტერდამი 4 აგური'
            price="35.00"
            color="Mixed"
            badge={true}
            des="კლინკერის ფილა - ექსტერიერისა და ინტერიერის გაფორმების ნამდვილი ტრენდია.მისი პოპულარობა განპირობებულია ტექსტურის და ფერის მრავალფეროვნებით, ასევე პროდუქტის მაღალი სიმტკიცით და გამძლეობით."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img='https://i.imgur.com/RUbM1A4.png'
            productName="კვარციტი 7"
            price="28.00"
            color="600 x 300მმ"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img='https://i.imgur.com/iLioxQS.png'
            productName="კვარციტი 3"
            price="60.00"
            color="600 x 300მმ"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
