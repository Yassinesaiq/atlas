import React from "react";
import Landigimg from "@/assets/landigimg.png";

const landing = () => {
  return (
    <div className="">
      <div className="items-center align-text relative">
        <img
          className="h-[50rem] w-full border-2 border-[#000000] box-shadow-lg opacity-50"
          src={Landigimg.src}
          alt="image"
        />
        <h1 className="absolute top-10 p-10 text-6xl">
          <h1>Sell ​​online and in-store.</h1>
          <b className="text-blue-300">Sell locally and globally.</b>
          <h1>Sell through direct sales and wholesale.</h1>
          <h1 className="text-blue-100">
            Sell on desktops and mobile devices.
          </h1>
        </h1>
      </div>
    </div>
  );
};

export default landing;
