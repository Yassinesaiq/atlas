import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center mb-4 mt-4 sm:p-1 sm:text-l md:text-xl xl:text-2xl sm:flex-col md:flex-row xl:flex-row">
      <Link href="/" className="flex items-center gap-2">
        <span className="flex gap-1 p-3 text-2xl font-bold font-serif sm:text-sm md:text-xl xl:text-2xl ">
          <span className="text-blue-800">A</span>
          <span className="text-blue-500">T</span>
          <span className="text-white">L</span>
          <span className="text-white">A</span>
          <span className="text-white">S</span>
        </span>
      </Link>
      <div className="flex gap-10 items-xenter  p-4 text-white hover:text-gray-300 sm:text-sm md:text-xl xl:text-2xl">
        <Link
          href="/"
          className="text-white hover:text-gray-300  flex items-center gap-2  "
        >
          <FaHome /> Home
        </Link>
        <Link
          href="/"
          className="text-white hover:text-gray-300  flex items-center gap-2  "
        >
          <FaCircleInfo /> About
        </Link>
        <div className="text-white hover:text-gray-300  flex items-center gap-2  ">
          <FaShoppingBasket /> Shop
          <IoMdArrowDropdown className="hover:text-blue-300 transition-all duration-300" />
        </div>
      </div>
      <div className="flex gap-4 items-center  sm:text-sm md:text-xl xl:text-2xl">
        <Link
          href="/"
          className="text-white hover:bg-blue-500 transition-all duration-300 flex items-center gap-2  bg-blue-950 p-3 rounded-2xl "
        >
          {" "}
          <IoLogIn />
          Einloggen
        </Link>
        <Link
          href="/"
          className="text-white hover:border-blue-500 transition-all duration-300 flex items-center gap-2  border-2 border-blue-950 p-3 rounded-2xl"
        >
          <FaUserPlus /> Mitglied werden
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
