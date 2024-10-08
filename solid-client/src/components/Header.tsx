
import { AiOutlineSearch, AiOutlineShoppingCart } from "solid-icons/ai";
import { FiMenu } from "solid-icons/fi";

import BannerLeft from "./Banner/BannerLeft";
import Sidebar from "./Mobile_sidebar/Sidebar";




function Navbar() {
  
 

  return (
    <>
      <header class="w-full min-h-max bg-mainBlueColor flex items-center py-2 lg:py-0 sticky top-0 z-50 ">
        <div class=" w-[95%] md:w-[90%] mx-auto px-2 md:px-0">
          <div class="flex flex-wrap h-full  items-center justify-between">
            <div class="order-1 flex gap-2 items-center basis-3/12  ">
              <div class="  hidden lg:block  cursor-pointer group/banner lg:py-7 transition-all duration-500  group-banner ">
                <FiMenu class="text-slate-100 text-xl lg:text-2xl  " />
                <div
                  class={`hidden  absolute top-full left-0   group-hover/banner:block lg:w-[33%] xl:w-[25%]  `}
                >
                  <BannerLeft />
                </div>
              </div>
              <div
                class="cursor-pointer group/banner lg:py-7  group-banner  lg:hidden  "
                onClick={() =>{}}
              >
                <FiMenu class="text-slate-100 text-2xl" />
              </div>
              <div class="text-slate-100 ">
                <a href="/" class=" text-lg md:text-2xl font-extrabold ">
                  Pickaboo
                </a>
              </div>
            </div>
            <div class="relative bg-white order-3 lg:order-2 mt-2 basis-full lg:basis-6/12 lg:grow py-[6px] flex rounded-md ">
              <input
                type="text"
                placeholder="Search for product, brands and more"
                class="ml-4 focus:outline-none px-4 py-1 grow text-sm md:text-md  "
              />
              <div class="absolute w-10 top-0  right-0 flex items-center h-full text-mainBlueColor bg-white border px-2 cursor-pointer hover:bg-orangeColor hover:text-white rounded-md ">
                <AiOutlineSearch class="text-2xl" />
              </div>
            </div>
            <div class="flex justify-end items-center space-x-2 text-white order-2 lg:order-3 md:gap-3 lg:basis-3/12 ">
              <div class="flex gap-1 cursor-pointer md:order-3">
                <AiOutlineShoppingCart class=" text-xl  md:text-2xl " />
                <p class="hidden md:block">Cart</p>
              </div>
              <span class="h-[20px] w-[2px] bg-white md:hidden "></span>
              <a
                href="/login"
                class="md:border md:px-6 py-2 rounded cursor-pointer md:order-1 md:hover:bg-white md:hover:text-mainBlueColor duration-500 "
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </header>
      <Sidebar />
    </>
  );
}

export default Navbar;
