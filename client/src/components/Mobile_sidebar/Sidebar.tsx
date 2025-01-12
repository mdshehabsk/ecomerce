import { useReducer } from "react";
import SidebarListItem from "./SidebarListItem";
import SidebarSubmenu from "./SidebarSubmenu";
import SidebarSubmenuListItem from "./SidebarSubmenuListItem";
// Image import
import mobile from "@/images/nav_icon_img/mobile.jpg"
import electronics from '@/images/nav_icon_img/electronics.jpg'
import mobile_accessories from '@/images/nav_icon_img/mobile_accessories.jpg'
import computer from '@/images/nav_icon_img/computer.jpg'
import lifestyle from '@/images/nav_icon_img/lifestyle.jpg'
import call from '@/images/nav_icon_img/call.png'
//impor icon
import { RxCross2 } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "@/toolkit/hook";
import { sidebarClose } from "@/toolkit/slice/SidebarSlice";

import  categories from '@/categories.json'
import { StaticImageData } from "next/image";
const  Sidebar = () => {
  const initialState = {
    smartphones: false,
    'electronics-appliances': false,
    mobile_accessories: false,
    computer: false,
    'computer-accessories': false,
    lifestyle: false,
  };
  const reducerFn = (state: typeof initialState, action: { type: keyof typeof initialState }) => {
    switch (action.type) {
      case "smartphones":
        return { ...initialState, [action.type]: !state[action.type] };
      case "electronics-appliances":
        return { ...initialState, [action.type]: !state[action.type] };
      case 'mobile_accessories' :
        return { ...initialState, [action.type]: !state[action.type] };
      case 'computer' :
        return { ...initialState, [action.type]: !state[action.type] };
      case 'computer-accessories':
        return { ...initialState, [action.type]: !state[action.type] };
      case 'lifestyle':
        return { ...initialState, [action.type]: !state[action.type] };
      default:
        return state;
    }
  };
  const [value, dispatch] = useReducer(reducerFn, initialState);
  const {sidebarShow} = useAppSelector(state => state.Sidebar)
  const dispatchRTK = useAppDispatch()
  const imageObj = {
    smartphones: mobile,
    'electronics-appliances': electronics,
    'mobile-accessories': mobile_accessories,
    computer,
   'computer-accessories': call,
    lifestyle
  }
  return (
    <div
      className={`h-full w-screen transform transition duration-500 bg-black/30  ${
        sidebarShow ? "translate-x-0" : "-translate-x-[2000px]"
      }  fixed z-[100] left-0 top-0 lg:hidden   `}
    >
      <div
        className="w-full h-full "
        onClick={() => dispatchRTK(sidebarClose())}
      ></div>
      <div className=" max-w-[330px] md:max-w-[400px] w-full bg-white h-full absolute z-[100] left-0 top-0 bottom-0 box p-5 overflow-y-scroll">
        <h2 className="font-bold">Shop for</h2>
        <RxCross2
          className="ml-auto -mt-6 text-3xl cursor-pointer"
          onClick={() => dispatchRTK(sidebarClose())}
        />
        <ul className=" py-4 max-w-full ">
          {
            categories?.map(categoryItem =>   <SidebarListItem
              key={categoryItem?.name.label}
              img={imageObj[categoryItem?.name?.value as keyof typeof imageObj] }
              name={categoryItem.name}
              submenuClick={() => dispatch({ type: "smartphones" })}
            >
              <SidebarSubmenu isOpen={value.smartphones}>
                {
                  categoryItem?.subCategories?.map(subCategoryItem =>  <SidebarSubmenuListItem key={subCategoryItem?.label}  subMenuItem={subCategoryItem} /> )
                }

              </SidebarSubmenu>
            </SidebarListItem> )
          }

        </ul>
        <div className="border-y-2 border-gray-100">
          <h2 className="font-bold mt-2">Other</h2>
        </div>
        <div className="flex ">
          <button className="bg-red-600 font-semibold text-white block w-full py-4 rounded-xl">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
