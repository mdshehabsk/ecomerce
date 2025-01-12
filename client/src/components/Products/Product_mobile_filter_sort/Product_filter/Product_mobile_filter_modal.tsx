'use client'

import { useAppDispatch, useAppSelector } from "@/toolkit/hook";
import { mobileFilterModalToggle } from "@/toolkit/slice/ProductSortAndFilter";
import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsChevronDown, BsFillPlayCircleFill } from "react-icons/bs";

const filterItems = [
  {
    title: "RAM(GB)",
    type: "checkbox",
    options: ["2GB", "3GB", "4GB", "8GB", "16GB"],
  },
  {
    title: "Processor",
    type: "checkbox",
    options: ["Intel i5", "Intel i7", "AMD Ryzen 5", "Mediatek Helio G32"],
  },
  {
    title: "Clock Speed (GHz)",
    type: "checkbox",
    options: ["2.0", "2.5", "3.0", "3.5", "4.0"],
  },
];

const Product_mobile_filter_modal = () => {
  const dispatch = useAppDispatch();
  const { filterIsModal } = useAppSelector(
    (state) => state.ProductSortAndFilter
  );

  const [checkboxFilters,setCheckboxFilter] = useState(filterItems?.map(item => ({...item,select: true})));
  const [priceSectionOpen,setPriceSectionOpen] = useState(true)
  const [filterPrice, setFilterPrice] = useState({
    min: undefined,
    max: undefined,
  });
  const toggleSection = (filterItem: typeof checkboxFilters[number]) => {
    const newArray = checkboxFilters.map(item => {
      if(item.title === filterItem.title) {
        return {
          ...item,
          select: !item.select
        }
      }
      return item
    })
    setCheckboxFilter(newArray)
  };
  function handleClose () {
   dispatch(mobileFilterModalToggle())
  }
  return (
    <div    className={` w-screen h-screen ${
      filterIsModal ? "right-0" : "-right-[1000px]"
    } fixed z-[50] transition-all duration-500 overflow-y-auto  top-0 bg-black/25 flex justify-end `} onClick={handleClose} >
      <div
        className={`bg-white  h-full w-[80%]  z-[60] transition-all duration-500 overflow-y-auto  `}
        onClick={event => event.stopPropagation()}
      >
        <div className="bg-sky-600 flex items-center px-2 py-3 gap-2 ">
          <AiOutlineArrowLeft
            onClick={() => dispatch(mobileFilterModalToggle())}
            className="text-xl text-white"
          />
          <p className="text-white text-xl">Filter</p>
        </div>
        <div className="my-4 px-2 py-1 shadow">
        {/* Section Header */}
        <div
          onClick={() => setPriceSectionOpen(!priceSectionOpen) }
          className="flex justify-between items-center cursor-pointer"
        >
          <span className="text-black font-semibold"> Price </span>
          <BsChevronDown />
        </div>

        {/* Section Content */}
        <div
          className={`${
            priceSectionOpen ? "h-auto" : "h-0 overflow-y-hidden"
          } transition-[height] duration-300 flex flex-col gap-2 my-2  `}
        >
          <div className=" flex flex-wrap gap-1 ">
            <div className="grow" >
            <input
              type="number"
              min={0}
              value={filterPrice?.min}
              placeholder="min"
              className="text-center py-2 outline-none border border-black/40 w-full "
            />
            </div>
           <div className="grow" >
           <input
              type="number"
               placeholder="max"
              className="text-center py-2 outline-none border border-black/40 w-full  "
              value={filterPrice?.max}
            />
           </div>
          </div>
          <button className="py-2 px-4 bg-orangeColor text-white rounded">
            Apply
          </button>
        </div>
      </div>
      {checkboxFilters.map((filter, ind) => (
        <div key={filter.title} className="my-4 px-2 py-1 shadow">
          {/* Section Header */}
          <div
            onClick={() => toggleSection(filter)}
            className="flex justify-between items-center cursor-pointer"
          >
            <span className="text-black font-semibold">{filter.title}</span>
            <BsChevronDown />
          </div>

          {/* Section Content */}
          <div
            className={`${
              filter.select ? "h-auto" : "h-0 overflow-y-hidden"
            } transition-[height] duration-300 flex flex-col gap-2 my-2`}
          >
            {filter.type === "checkbox" && (
              <div className="flex flex-col gap-2  ">
                {"options" in filter &&
                  filter.options !== undefined &&
                  filter?.options.map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input type="checkbox" />
                      {option}
                    </label>
                  ))}
              </div>
            )}
          </div>
        </div>
      ))}
  
      </div>
    </div>
  );
};

export default Product_mobile_filter_modal;
