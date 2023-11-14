import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import NavbarItems from "../NavbarItems";
import "./navbar.css";
import React from "react";

export default function Navbar() {
  //To Know If Mobile Navigation Bar is Opened Or Not
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="header sm:relative sm:-translate-x-2/4 sm:top-0 container sm:w-full">
      <div className="navbar sm:w-full flex justify-around justify-between items-center">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <div className="w-32 cursor-pointer">
            <div className="logo">
              <h1 className="logoHeading">
                Block
                <span className="logoHeading__colored">Chain</span>
              </h1>
            </div>
          </div>
        </div>
        <ul className="text-black md:flex hidden list-none flex-row justify-between items-center flex-initial">
          {["Services", "Transactions", "Our Team"].map((item, index) => (
            <NavbarItems key={index} title={item} />
          ))}
        </ul>
        <div className="flex relative">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="text-black md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text-black md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none w-full
                    flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2  text-white">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {["Services", "Transactions", "Our Team"].map((item, index) => (
                <NavbarItems
                  key={item + index}
                  title={item}
                  classProps="my-2 text-lg"
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
