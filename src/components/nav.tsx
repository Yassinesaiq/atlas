import React from "react";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { FaHome } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center pl-4 pr-4 m-1  	">
      <Link href="/" className="flex items-center gap-2">
        <img src={logo.src} alt="logo" width={50} height={50} />
        <span className="text-white text-2xl ">ATLAS</span>
      </Link>
      <div className="flex gap-10 items-center  p-4 text-white hover:text-gray-300 ">
        <Link
          href="/"
          className="text-white hover:text-gray-300  flex items-center gap-2 text-xl"
        >
          <FaHome /> Home
        </Link>
        <Link
          href="/"
          className="text-white hover:text-gray-300  flex items-center gap-2 text-xl"
        >
          <FaCircleInfo /> About
        </Link>
        <div className="text-white hover:text-gray-300  flex items-center gap-2 text-xl">
          <FaShoppingBasket /> Shop
          <IoMdArrowDropdown className="hover:text-blue-300 transition-all duration-300" />
        </div>
      </div>
      <div className="flex gap-4 items-center p-4">
        <Link
          href="/"
          className="text-white hover:bg-blue-500 transition-all duration-300 flex items-center gap-2 text-xl bg-blue-950 p-3 rounded-2xl"
        >
          {" "}
          <IoLogIn />
          Einloggen
        </Link>
        <Link
          href="/"
          className="text-white hover:border-blue-500 transition-all duration-300 flex items-center gap-2 text-xl border-2 border-blue-950 p-3 rounded-2xl"
        >
          <FaUserPlus /> Mitglied werden
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
