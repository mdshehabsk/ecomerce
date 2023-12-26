import { BiBarChart } from "react-icons/bi";
import { RiProductHuntLine } from "react-icons/ri";
import { CgChart } from "react-icons/cg";
import { FiCommand } from "react-icons/fi";
import { SlWrench } from "react-icons/sl";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";
const Sidebar = () => {
  return (
    <div
      className={` basis-[20%] h-full bg-gray-800  transition-all overflow-x-hidden `}
    >

        <div className="p-3 text-white flex items-center gap-2 ">
          <div  className="flex items-center gap-1  ">
            <RiMenu2Fill className="text-xl" />
            <span className=" ml-[15px] text-xl "> Dashboard </span>
          </div>

        </div>

      <ul className="mt-[50px]">
        <li className=" my-2 p-3 text-white flex items-center gap-2  hover:bg-gray-700 transition-['background'] ">
          <Link to="" className="flex items-center gap-1  ">
            <BiBarChart className="text-xl" />
            <span className="   "> Overview</span>
          </Link>
          <MdKeyboardArrowRight className="ml-auto  " />
        </li>
        <li className=" my-2 p-3 text-white flex items-center gap-2  hover:bg-gray-700 transition-['background'] ">
          <Link to="" className="flex items-center gap-1  ">
            <RiProductHuntLine className="text-xl" />
            <span className="   "> Product</span>
          </Link>
          <MdKeyboardArrowRight className="ml-auto  " />
        </li>
        <li className=" my-2 p-3 text-white flex items-center gap-2  hover:bg-gray-700 transition-['background'] ">
          <Link to="" className="flex items-center gap-1  ">
            <FiCommand className="text-xl" />
            <span className="   "> Order</span>
          </Link>
          <MdKeyboardArrowRight className="ml-auto  " />
        </li>
        <li className=" my-2 p-3 text-white flex items-center gap-2  hover:bg-gray-700 transition-['background'] ">
          <Link to="" className="flex items-center gap-1  ">
            <SlWrench className="text-xl" />
            <span className="   "> Maintaince</span>
          </Link>
          <MdKeyboardArrowRight className="ml-auto  " />
        </li>
        <li className=" my-2 p-3 text-white flex items-center gap-2  hover:bg-gray-700 transition-['background'] ">
          <Link to="" className="flex items-center gap-1  ">
            <CiSettings className="text-xl" />
            <span className="   "> Setting</span>
          </Link>
          <MdKeyboardArrowRight className="ml-auto  " />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
