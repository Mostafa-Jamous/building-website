import React from "react";
import img1 from "../imgs/darkBackgound.jpg";

function Landing({ title }) {
  return (
    <div className="relative h-[550px] w-full">
      <img className="w-full absolute top-0 left-0 h-full " src={img1} alt="" />
      <div className="absolute left-[50%] -translate-x-[50%] bottom-12 text-white text-center">
        <h1 className="font-bold text-4xl mb-6">{title}</h1>
        <h1 className="text-3xl">Home / {title}</h1>
      </div>
    </div>
  );
}

export default Landing;
