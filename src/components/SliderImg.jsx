import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../imgs/darkBackgound.jpg";

function SliderImg() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="max-xl:w-[620px] max-xl:mx-auto">
      <img
        className="rounded-3xl overflow-hidden w-full p-2"
        src={img1}
        alt=""
      />
      <img
        className="rounded-3xl overflow-hidden w-full p-2"
        src={img1}
        alt=""
      />
      <img
        className="rounded-3xl overflow-hidden w-full p-2"
        src={img1}
        alt=""
      />
      <img
        className="rounded-3xl overflow-hidden w-full p-2"
        src={img1}
        alt=""
      />
      <img
        className="rounded-3xl overflow-hidden w-full p-2"
        src={img1}
        alt=""
      />
    </Slider>
  );
}

export default SliderImg;
