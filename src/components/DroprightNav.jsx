import React, { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

function DroprightNav({ title, onClick }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      onClick={() => setOpenMenu(!openMenu)}
      className="flex justify-center items-center relative  hover:bg-white/30 cursor-pointer "
    >
      <div className="hover:text-red-700 text-center ">{title}</div>
      <AiFillCaretRight
        className={`${openMenu ? "rotate-90" : ""} duration-300`}
        color="red"
      />
      <div
        onClick={onClick}
        onMouseLeave={() => setOpenMenu(false)}
        className={`absolute rounded-2xl bg-white/30 py-2 top-[50%] -right-[50px] duration-300 ${
          openMenu ? "z-10 opacity-100" : "-z-10 opacity-0"
        }`}
      >
        <Link
          className="block px-3 py-1 hover:bg-white/30 hover:text-red-700"
          to="commercial"
        >
          Commercial
        </Link>
        <Link
          className="block px-3 py-1 hover:bg-white/30 hover:text-red-700"
          to="residential"
        >
          Residential
        </Link>
      </div>
    </div>
  );
}

export default DroprightNav;
