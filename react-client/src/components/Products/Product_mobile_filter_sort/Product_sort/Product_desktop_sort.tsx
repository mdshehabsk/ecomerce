import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
const Product_desktop_sort = () => {
  const [sortMenu, setSortMenu] = useState(false);
  const SortBtnClick = () => {
    setSortMenu((prev) => !prev);
  };
  return (
    <div className="md:flex items-center gap-1 hidden ">
      {sortMenu && (
        <div
          onClick={SortBtnClick}
          className="w-full h-full absolute top-0 left-0"
        ></div>
      )}
      <div>
        <h4 className="text-gray-500">Sort By :</h4>
      </div>
      <div className="relative">
        <div
          onClick={SortBtnClick}
          className="  text-gray-500 border border-gray-300 py-2 px-3 min-w-[200px] flex flex-wrap justify-between items-center cursor-pointer"
        >
          <p>Default</p>
          <AiFillCaretDown />
        </div>

        <ul
          className={` ${
            sortMenu ? "block" : "hidden"
          }  z-50 basis-full absolute top-full left-0 border border-gray-300 w-full bg-white `}
        >
          <li className="px-2 py-1 my-1 hover:bg-slate-200 transition duration-150 ">
            <a href="#">Newest First</a>
          </li>
          <div className="w-full h-px bg-gray-200"></div>
          <li className="px-2 py-1 my-1 hover:bg-slate-200 transition duration-150 ">
            Oldest First
          </li>
          <div className="w-full h-px bg-gray-200"></div>
          <li className="px-2 py-1 my-1 hover:bg-slate-200 transition duration-150 ">
            Name A to Z
          </li>
          <div className="w-full h-px bg-gray-200"></div>
          <li className="px-2 py-1 my-1 hover:bg-slate-200 transition duration-150 ">
            Name Z to A
          </li>
          <div className="w-full h-px bg-gray-200"></div>
          <li className="px-2 py-1 my-1 hover:bg-slate-200 transition duration-150 ">
            Price High to Low
          </li>
          <div className="w-full h-px bg-gray-200"></div>
          <li className="px-2 py-1 my-1 hover:bg-slate-200 transition duration-150 ">
            Price Low to High
          </li>
          <div className="w-full h-px bg-gray-200"></div>
          <li className="px-2 py-1 my-1 hover:bg-slate-200 transition duration-150 ">
            Express Delivary
          </li>
          <div className="w-full h-px bg-gray-200"></div>
          <li className="px-2 py-1 my-1 hover:bg-slate-200 transition duration-150 ">
            Position
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product_desktop_sort;
