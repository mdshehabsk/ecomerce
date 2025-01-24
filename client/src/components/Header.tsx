"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaAngleDown , FaUser } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { IoMdCart } from "react-icons/io";
import BannerLeft from "./Banner/BannerLeft";
import Sidebar from "./Mobile_sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "@/toolkit/hook";
import { sidebarOpen } from "@/toolkit/slice/SidebarSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGetUserDataQuery } from "@/toolkit/api/userApi";
import Popover from "./Popover";
import { useGetCartsQuery } from "@/toolkit/api/cartApi";
import Dropdown from "./Account/Dropdown";
function Navbar() {
  const {data : cartsData} = useGetCartsQuery(undefined)
  const { isLoading, isError, data } = useGetUserDataQuery(undefined);
  const { token } = useAppSelector((state) => state.AuthSlice);
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();

  const { sidebarShow } = useAppSelector((state) => state.Sidebar);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (sidebarShow) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [sidebarShow]);
  if (pathname.startsWith("/dashboard")) {
    return;
  }

  function handleDropdown() {
    setShowDropdown(true);
  }
  function handlePopoverClose() {
    setShowDropdown(false);
  }
  const totalCartsItem = cartsData?.data?.items?.reduce((total,acc)=> total + acc.quantity,0)

  function handleSearchChange (event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value)
  }
  return (
    <>
      <header className="w-full min-h-max bg-mainBlueColor flex items-center py-2 lg:py-0 sticky top-0 z-50 ">
        <div className=" w-[95%] md:w-[90%] mx-auto px-2 md:px-0">
          <div className="flex flex-wrap h-full  items-center justify-between">
            <div className="order-1 flex gap-2 items-center basis-3/12  ">
              <div className="  hidden lg:block  cursor-pointer group/banner lg:py-7 transition-all duration-500  group-banner ">
                <FiMenu className="text-slate-100 text-xl lg:text-2xl  " />
                <div
                  className={`hidden  absolute top-full left-0   group-hover/banner:block lg:w-[33%] xl:w-[25%]`}
                >
                  <BannerLeft />
                </div>
              </div>
              <div
                className="cursor-pointer group/banner lg:py-7  group-banner  lg:hidden  "
                onClick={() => dispatch(sidebarOpen())}
              >
                <FiMenu className="text-slate-100 text-2xl" />
              </div>
              <div className="text-slate-100 ">
                <Link href="/" className=" text-lg md:text-2xl font-extrabold ">
                  Pickaboo
                </Link>
              </div>
            </div>
            <div className="relative bg-white order-3 lg:order-2 mt-2 basis-full lg:basis-6/12 lg:grow py-[6px] flex rounded-md ">
              <input
                type="text"
                placeholder="Search for product, brands and more"
                className="ml-4 focus:outline-none px-4 py-1 grow text-sm md:text-md "
                onChange={handleSearchChange}
              />
              <div className="absolute w-10 top-0  right-0 flex items-center h-full text-mainBlueColor bg-white border px-2 cursor-pointer hover:bg-orangeColor hover:text-white rounded-md ">
                <AiOutlineSearch className="text-2xl" />
              </div>
            </div>
            <div className="flex justify-center items-center space-x-2 text-white order-2 lg:order-3 md:gap-3 lg:basis-3/12 ">
           
              {
                !isLoading && !isError && data && token &&   <Link href='/checkout/cart' className="flex gap-1 cursor-pointer md:order-3 ">
                <div className="relative">
                <IoMdCart className=" text-xl  md:text-3xl " />
                <p className="absolute -top-[20%] right-0 text-xs " > {totalCartsItem} </p>
                </div>
                <p className="hidden md:block">Cart</p>
               
              </Link>
              }
              <span className="h-[20px] w-[2px] bg-white md:hidden "></span>

              {!isLoading && !isError && data && token ? (
                <div className="relative">
                  <div
                    onClick={handleDropdown}
                    className="flex gap-2 items-center cursor-pointer"
                  >
                   <div className="bg-gray-300 p-2 rounded" >
                   <FaUser className="text-white " />
                   </div>
                    <div className="hidden md:flex items-center gap-2  ">
                      <span>My Account</span>
                      <FaAngleDown className="font-light" />
                    </div>
                  </div>
                  <Popover isOpen={showDropdown} onClose={handlePopoverClose}>
                    <Dropdown />
                  </Popover>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="md:border md:px-6 py-2 rounded cursor-pointer md:order-1 md:hover:bg-white md:hover:text-mainBlueColor duration-500 "
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
      <Sidebar />
    </>
  );
}

export default Navbar;
