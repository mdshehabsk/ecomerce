'use client'

import { AiOutlineBarChart } from 'solid-icons/ai'

import { RiLogosProductHuntLine } from 'solid-icons/ri'
import { FiCommand } from "solid-icons/fi";
import { HiOutlineWrench } from 'solid-icons/hi'
import { IoSettingsSharp } from 'solid-icons/io'
import { AiOutlineMenu } from 'solid-icons/ai'
import { ImCross } from 'solid-icons/im'
import { createSignal } from 'solid-js/types/server/reactive.js';


const sidebarItems = [
  {
    id: 1,
    name: "Overview",
    icon: AiOutlineBarChart,
    link: "/dashboard"
  },
  {
    id: 2,
    name: "Product",
    icon: RiLogosProductHuntLine,
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
    icon: HiOutlineWrench,
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
    icon: IoSettingsSharp,
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
  const [activeItem, setActiveItem] = createSignal<null | number>(1);

  const handleItemClick = (item: number) => {
    setActiveItem(activeItem() === item ? null : item);
  };
  const  sidebarShow  = false

  return (
    <>
      <div
        class={`w-screen h-screen  bg-black/30 absolute top-0 left-0 right-0 z-10 ${
          sidebarShow ? "block" : "hidden"
        } md:hidden `}
        onClick={() => {}}
      ></div>
      <div
        class={` min-w-[250px] md:basis-[23%] h-full bg-gray-800  overflow-x-hidden ${
          sidebarShow ? "left-0" : "-left-full"
        }  fixed md:left-0  md:static z-20 transition-["position"]  duration-300 `}
      >
        <div class="p-3 text-white flex items-center gap-2 ">
          <div class="flex items-center gap-1  ">
            {sidebarShow ? (
              <ImCross
                class="text-3xl cursor-pointer "
                onClick={() => {}}
              />
            ) : (
              <AiOutlineMenu class="text-xl" />
            )}
            <span class=" ml-[15px] text-xl "> Dashboard </span>
          </div>
        </div>

        <ul class="mt-[50px]">
          {sidebarItems.map((item,ind) => (
            item.link ? <a  href={item.id}      class={`text-white flex flex-wrap items-center  hover:bg-gray-700 transition-['background']  w-full  `} href={item.link}>    <div class={`flex items-center gap-2  hover:bg-gray-700 transition-['background'] p-3 w-full ${activeItem === item.id && "bg-gray-700"} `}>
            <item.icon class="text-xl" />
            <span class=""> {item.name} </span>
            
            
          </div> </a> :
            <li
              
              onClick={() => handleItemClick(item.id)}
              key={item.id}
              class="text-white flex flex-wrap items-center  "
            >
              <div class={`flex items-center gap-2  hover:bg-gray-700 transition-['background'] p-3 w-full ${activeItem() === item.id && "bg-gray-700"} `}>
                <item.icon class="text-xl" />
                <span class=""> {item.name} </span>
                {item.submenu && (
                  <IoSettingsSharp
                    class={`ml-auto  ${
                      activeItem() === item.id && " rotate-90 "
                    } `}
                  />
                )}
              </div>
              {activeItem() === item.id && (
                <ul class="basis-full  bg-gray-800">
                  {item.submenu &&
                    item.submenu.map((subItem) => (
                      <li
                        key={subItem.id}
                        class="py-2 border-t border-gray-700 hover:bg-gray-700  pl-5 "
                      >
                        <a href={subItem.link} class="block ">
                          {subItem.name}
                        </a>
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
