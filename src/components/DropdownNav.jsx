import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

function DropdownNav({ title }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      onClick={() => setOpenMenu(!openMenu)}
      className="flex items-center relative cursor-pointer"
    >
      <div className="hover:text-red-700 ">{title}</div>
      <AiFillCaretDown
        className={`${openMenu ? "rotate-180" : ""} duration-300`}
        color="red"
      />
      <div
        onMouseLeave={() => setOpenMenu(false)}
        className={`absolute rounded-2xl bg-white/30 py-2 top-7 left-0 duration-300 ${
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

export default DropdownNav;
