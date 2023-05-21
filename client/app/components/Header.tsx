"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import Banner from "./Banner/Banner";
import BannerLeft from "./Banner/BannerLeft";

function Navbar() {
  const [bannerShow,setBannerShow] = useState(false)
  return (
    <>
      <header className="w-full max-h-[80px] min-h-max bg-sky-600 flex items-center py-4 sticky top-0 z-50 ">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex flex-wrap h-full  items-center justify-between">
            <div className="order-1 flex space-x-4 items-center " >
            <div className="cursor-pointer group/banner py-7 " onMouseOver={()=> setBannerShow(true)} onMouseLeave={()=> setBannerShow(false)} >
              <FiMenu className="text-slate-100 text-2xl  "  />
              <div className={`hidden  absolute top-full left-0 min-w-[338px] lg:${bannerShow ? 'block' : 'hidden'} `} >
              <BannerLeft/>
              </div>
            </div>
            <div className="text-slate-100 ">
              <p className="text-2xl font-extrabold ">Pickaboo</p>
            </div>
            </div>
            <div className="relative bg-white order-3 lg:order-2 mt-2 basis-full lg:basis-4/6  p-1 flex">
              <input
                type="text"
                placeholder="Search for product, brands and more"
                className="ml-4 focus:outline-none px-4 py-1 grow"
              />
              <div className="absolute w-10 top-0 flex items-center h-full text-slate-400">
                <AiOutlineSearch className="text-2xl" />
              </div>
            </div>
            <div className="flex items-center space-x-2 text-white order-2 lg:order-3 ">
              <div className="flex gap-1 cursor-pointer" >
                <AiOutlineShoppingCart className="text-2xl " />
                <p>Cart</p>
              </div>
              <span className="h-[20px] w-[2px] bg-white "></span>
              <div className="md:border md:px-6 py-1 rounded cursor-pointer " >
                <a className="text-white font-normal  "> Login </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
