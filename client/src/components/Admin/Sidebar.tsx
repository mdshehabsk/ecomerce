'use client'
import { BiBarChart } from "react-icons/bi";
import { RiProductHuntLine } from "react-icons/ri";
import { FiCommand } from "react-icons/fi";
import { SlWrench } from "react-icons/sl";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/toolkit/hook";
import { sidebarClose } from "@/toolkit/slice/AdminSidebarSlice";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const sidebarItems = [
  {
    id: 1,
    name: "Overview",
    icon: BiBarChart,
    link: "/dashboard"
  },
  {
    id: 2,
    name: "Product",
    icon: RiProductHuntLine,
    submenu: [
      {
        id: 21,
        name: "Add Product",
        link: '/dashboard/add-product'
      },
      {
        id: 22,
        name: "Manage Product",
        link: '/dashboard/manage-product'
      },
      
    ],
  },
  {
    id: 3,
    name: "Order",
    icon: FiCommand,
    // submenu: [
    //   {
    //     id: 31,
    //     name: "Place Order",
    //   },
    //   {
    //     id: 32,
    //     name: "Track Order",
    //   },
    //   {
    //     id: 33,
    //     name: "Cancel Order",
    //   },
    // ],
  },
  {
    id: 4,
    name: "Maintenance",
    icon: SlWrench,
    // submenu: [
    //   {
    //     id: 41,
    //     name: "Scheduled Maintenance",
    //   },
    //   {
    //     id: 42,
    //     name: "Emergency Maintenance",
    //   },
    // ],
  },
  {
    id: 5,
    name: "Settings",
    icon: CiSettings,
    // submenu: [
    //   {
    //     id: 51,
    //     name: "General Settings",
    //   },
    //   {
    //     id: 52,
    //     name: "Security Settings",
    //   },
    //   {
    //     id: 53,
    //     name: "Account Settings",
    //   },
    // ],
  },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<null | number>(1);

  const handleItemClick = (item: number) => {
    setActiveItem(activeItem === item ? null : item);
  };
  const { sidebarShow } = useAppSelector((state) => state.AdminSidebar);
  const dispatch = useAppDispatch();
  return (
    <>
      <div
        className={`w-screen h-screen  bg-black/30 absolute top-0 left-0 right-0 z-10 ${
          sidebarShow ? "block" : "hidden"
        } md:hidden `}
        onClick={() => dispatch(sidebarClose())}
      ></div>
      <div
        className={` min-w-[250px] md:basis-[23%] h-full bg-gray-800  overflow-x-hidden ${
          sidebarShow ? "left-0" : "-left-full"
        }  fixed md:left-0  md:static z-20 transition-["position"]  duration-300 `}
      >
        <div className="p-3 text-white flex items-center gap-2 ">
          <div className="flex items-center gap-1  ">
            {sidebarShow ? (
              <RxCross2
                className="text-3xl cursor-pointer "
                onClick={() => dispatch(sidebarClose())}
              />
            ) : (
              <RiMenu2Fill className="text-xl" />
            )}
            <span className=" ml-[15px] text-xl "> Dashboard </span>
          </div>
        </div>

        <ul className="mt-[50px]">
          {sidebarItems.map((item) => (
            item.link ? <Link        className={`text-white flex flex-wrap items-center  hover:bg-gray-700 transition-['background']  w-full  `} href={item.link}>    <div className={`flex items-center gap-2  hover:bg-gray-700 transition-['background'] p-3 w-full ${activeItem === item.id && "bg-gray-700"} `}>
            <item.icon className="text-xl" />
            <span className=""> {item.name} </span>
            
            
          </div> </Link> :
            <li
              onClick={() => handleItemClick(item.id)}
              key={item.id}
              className="text-white flex flex-wrap items-center  "
            >
              <div className={`flex items-center gap-2  hover:bg-gray-700 transition-['background'] p-3 w-full ${activeItem === item.id && "bg-gray-700"} `}>
                <item.icon className="text-xl" />
                <span className=""> {item.name} </span>
                {item.submenu && (
                  <MdKeyboardArrowRight
                    className={`ml-auto  ${
                      activeItem === item.id && " rotate-90 "
                    } `}
                  />
                )}
              </div>
              {activeItem === item.id && (
                <ul className="basis-full  bg-gray-800">
                  {item.submenu &&
                    item.submenu.map((subItem) => (
                      <li
                        key={subItem.id}
                        className="py-2 border-t border-gray-700 hover:bg-gray-700  pl-5 "
                      >
                        <Link href={subItem.link} className="block ">
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
