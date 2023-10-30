import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import DropdownNav from "../components/DropdownNav";
import DroprightNav from "../components/DroprightNav";
import Landing from "../pages/Landing";

function NavBar() {
  const [languageMenu, setLanguageMenu] = useState(false);
  const [dropMenu, setDropMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      }
    };
  }, []);

  return (
    <div className={`fixed top-0 w-full z-50 ${scroll ? "bg-black/70" : ""}`}>
      <div className="z-30 py-5 sticky top-0 text-white flex justify-between px-2 items-center">
        <div className="relative flex items-center flex-grow-0 cursor-pointer">
          <GiHamburgerMenu
            onClick={() => setDropMenu(!dropMenu)}
            size={40}
            className="xl:hidden"
          />
          <Link to="/" className="font-bold text-5xl max-sm:text-2xl">
            Logo
          </Link>
          {dropMenu && (
            <div className="xl:hidden absolute rounded-2xl text-xl bg-white/30 py-2 top-9 left-0 duration-300 min-w-[200px]  text-center">
              <div className="cursor-pointer">
                <NavLink
                  onClick={() => setDropMenu(false)}
                  className="hover:bg-white/30 block hover:text-red-700 "
                  to="/"
                >
                  Home
                </NavLink>
              </div>
              <DroprightNav onClick={() => setDropMenu(false)} title="Buy" />
              <DroprightNav onClick={() => setDropMenu(false)} title="Sell" />
              <DroprightNav onClick={() => setDropMenu(false)} title="Rents" />
              <DroprightNav
                onClick={() => setDropMenu(false)}
                title="New Projects"
              />
              <div className=" cursor-pointer">
                <NavLink
                  onClick={() => setDropMenu(false)}
                  className="hover:bg-white/30 block hover:text-red-700 "
                  to="incomeProperty"
                >
                  Income Property
                </NavLink>
              </div>
              <div className=" cursor-pointer">
                <NavLink
                  onClick={() => setDropMenu(false)}
                  className="hover:bg-white/30 block hover:text-red-700 "
                  to="design"
                >
                  Design
                </NavLink>
              </div>
              <div className=" cursor-pointer">
                <NavLink
                  onClick={() => setDropMenu(false)}
                  className="hover:bg-white/30 block hover:text-red-700 "
                  to="plans"
                >
                  Plans
                </NavLink>
              </div>
              <div className=" cursor-pointer">
                <NavLink
                  onClick={() => setDropMenu(false)}
                  className="hover:bg-white/30 block hover:text-red-700 "
                  to="about"
                >
                  About
                </NavLink>
              </div>
              <div className=" cursor-pointer">
                <NavLink
                  onClick={() => setDropMenu(false)}
                  className="hover:bg-white/30 block hover:text-red-700 "
                  to="contact"
                >
                  Contact
                </NavLink>
              </div>
              <div className=" cursor-pointer">
                <NavLink
                  onClick={() => setDropMenu(false)}
                  className="hover:bg-white/30 block hover:text-red-700 "
                  to="careers"
                >
                  Careers
                </NavLink>
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-5 text-xl items-center max-xl:hidden">
          <div className="cursor-pointer">
            <NavLink className="hover:text-red-700 " to="/">
              Home
            </NavLink>
          </div>
          <DropdownNav title="Buy" />
          <DropdownNav title="Sell" />
          <DropdownNav title="Rents" />
          <DropdownNav title="New Projects" />
          <div className=" cursor-pointer">
            <NavLink className="hover:text-red-700 " to="/incomeProperty">
              Income Property
            </NavLink>
          </div>
          <div className=" cursor-pointer">
            <NavLink className="hover:text-red-700 " to="/design">
              Design
            </NavLink>
          </div>
          <div className=" cursor-pointer">
            <NavLink className="hover:text-red-700 " to="/plans">
              Plans
            </NavLink>
          </div>
          <div className=" cursor-pointer">
            <NavLink className="hover:text-red-700 " to="/about">
              About
            </NavLink>
          </div>
          <div className=" cursor-pointer">
            <NavLink className="hover:text-red-700 " to="/contact">
              Contact
            </NavLink>
          </div>
          <div className=" cursor-pointer">
            <NavLink className="hover:text-red-700 " to="/careers">
              Careers
            </NavLink>
          </div>
        </div>
        <div
          onMouseLeave={() => setLanguageMenu(false)}
          onClick={() => setLanguageMenu(!languageMenu)}
          className={` relative flex flex-grow-0 items-center gap-1 cursor-pointer rounded-2xl bg-white/30 border border-white/40 px-4 py-2 duration-300`}
        >
          <MdLanguage size={20} color="white" />
          <h1>EN</h1>
          <AiFillCaretDown
            className={`${languageMenu ? "rotate-180" : ""} duration-300`}
            color="red"
          />
          {languageMenu && (
            <div
              className={`${
                languageMenu ? "opacity-100" : "opacity-0"
              } absolute rounded-2xl bg-white/30 py-2 top-9 left-[50%] -translate-x-[50%] duration-300 w-20 text-center `}
            >
              <h1 className="hover:text-MainColor hover:bg-white/30">EN</h1>
              <h1 className="hover:text-MainColor hover:bg-white/30">AR</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
