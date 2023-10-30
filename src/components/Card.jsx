import React from "react";
import buildingImg from "../imgs/square.jpg";
import { FaBed } from "react-icons/fa";
import { MdBathroom } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShare } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";

function Card({ title }) {
  return (
    <div className="w-[350px] bg-white py-5 px-4 shadow-2xl rounded-3xl mx-auto">
      <img className="w-full rounded-2xl mb-4" src={buildingImg} alt="" />
      <div className="flex flex-wrap">
        <div className="flex-grow">
          <h1 className="text-xl font-bold">{title}</h1>
          <h2 className="text-sm my-2">
            <span className="font-bold">New Cairo,</span> Egypt
          </h2>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaBed size={20} />
              <h1>3</h1>
            </div>
            <div className="flex items-center gap-2">
              <MdBathroom size={20} />
              <h1>4</h1>
            </div>
            <div className="flex items-center gap-2">
              <MdSpaceDashboard size={20} />
              <h1>360m</h1>
            </div>
          </div>
          <h4 className="my-5">2.610.000 | EGP</h4>
          <button className="text-white font-bold bg-red-600 hover:bg-red-700 rounded-xl py-2 px-8 text-lg">
            See Details
          </button>
        </div>
        <div className="flex-grow-0">
          <AiOutlineHeart className="my-5" size={25} />
          <HiOutlineShare className="my-5" size={25} />
          <FaWhatsapp className="my-5" size={25} />
          <MdOutlinePhone className="my-5" size={25} />
        </div>
      </div>
    </div>
  );
}

export default Card;
