'use client'
import { useState } from "react";
import { BsChevronDown, BsFillPlayCircleFill } from "react-icons/bs";

const Product_desktop_filter = () => {
  const [open, isOpen] = useState(false);
  return (
    <div>
      <h2 className="text-3xl text-gray-900">Filter</h2>
      <div className="w-full h-px bg-gray-300 my-2  "></div>
      <div className={` my-4`}>
        <div
          onClick={() => isOpen(!open)}
          className="flex justify-between items-center"
        >
          <span className="text-black font-semibold">Price</span>
          <BsChevronDown />
        </div>
        <div
          className={` ${
            open ? "h-11" : "h-0  overflow-y-hidden "
          } transition-[height] duration-300 flex gap-2 my-2 `}
        >
          <input
            name="min"
            type="number"
            placeholder="min"
            min={0}
            className="w-[60px] h-[35px] product_filter_price_box py-0"
          />

          <input
            min={0}
            name="max"
            type="number"
            placeholder="max"
            className="w-[60px] h-[35px] product_filter_price_box py-0"
          />
          <button className="border border-orange-500 h-[35px] px-2 rounded-md ">
            <BsFillPlayCircleFill className="text-orange-500 text-lg  " />
          </button>
        </div>
      </div>
      <div className="bg-slate-300 h-px w-full"></div>
      <div className={` my-4`}>
        <div
          onClick={() => isOpen(!open)}
          className="flex justify-between items-center"
        >
          <span className="text-black font-semibold">RAM(GB)</span>
          <BsChevronDown />
        </div>
        <div
          className={` ${
            open ? "h-11" : "h-0  overflow-y-hidden "
          } transition-[height] duration-300 flex gap-2 my-2 `}
        >
          <div className="flex gap-2">
            <div className="flex gap-2">
              <div>
                <input type="checkbox" id="3" />
              </div>
            </div>
            <label htmlFor="3">3GB</label>
          </div>
        </div>
      </div>
      <div className="bg-slate-300 h-px w-full"></div>
      <div className={`my-4`}>
        <div
          onClick={() => isOpen(!open)}
          className="flex justify-between items-center"
        >
          <span className="text-black font-semibold">Processor</span>
          <BsChevronDown />
        </div>
        <div
          className={` ${
            open ? "h-11" : "h-0  overflow-y-hidden "
          } transition-[height] duration-300 flex gap-2 my-2 `}
        >
          <div className="flex gap-2">
            <div className="flex gap-2">
              <div>
                <input type="checkbox" id="3" />
              </div>
            </div>
            <label htmlFor="3">mediatek helio G32</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_desktop_filter;
