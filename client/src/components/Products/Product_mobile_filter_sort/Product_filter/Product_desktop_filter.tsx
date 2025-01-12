"use client";
import { TProps } from "@/components/Admin/SidebarLink";
import { FC, useState } from "react";
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
type Tprops = {
  currentFilters  : Record<string,{type:string,options: string[]}>
}
const ProductDesktopFilter : FC<Tprops> = ({currentFilters}) => {
  // const [Filters,setFilters] = useState(currentFilters?.map(item => ({...item,select: true})));
  const [filters,setFilters] = useState(Object.entries(currentFilters).map(([key,value])=> {
    return {
      title: key,
      isOpen: true,
      options: value?.options?.map(item => ({value: item,select: false}))
    }
  }))

  const [priceSectionOpen,setPriceSectionOpen] = useState(true)
  const [filterPrice, setFilterPrice] = useState({
    min: 0,
    max: 10000,
  });
  const toggleSection = (filterItem: typeof filters[number]) => {
    const newArray = filters.map(item => {
      if(item.title === filterItem.title) {
        return {
          ...item,
          isOpen: !item.isOpen
        }
      }
      return item
    })
    setFilters(newArray)
  };

  return (
    <div className="">
      <h2 className="text-3xl text-gray-900">Filter</h2>
      <div className="w-full h-px bg-gray-300 my-2"></div>
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
          <div className=" flex gap-1 ">
            <input
              type="number"
              min={0}
              value={filterPrice?.min}
              placeholder="min"
              className="text-center py-2 outline-none border border-black/40 w-[140px]  "
            />
            <input
              type="number"
              className="text-center py-2 outline-none border border-black/40  w-[140px]  "
              value={filterPrice?.max}
            />
          </div>
          <button className="py-2 px-4 bg-orangeColor text-white rounded">
            Apply
          </button>
        </div>
      </div>
      {filters.map((filter, ind) => (
        <div key={filter.title} className="my-4 px-2 py-1 shadow">

          <div
            onClick={() => toggleSection(filter)}
            className="flex justify-between items-center cursor-pointer"
          >
            <span className="text-black font-semibold capitalize">{filter.title}</span>
            <BsChevronDown />
          </div>


          <div
            className={`${
              filter.isOpen ? "h-auto" : "h-0 overflow-y-hidden"
            } transition-[height] duration-300 flex flex-col gap-2 my-2`}
          >

              <div className="flex flex-col gap-2  ">
                {"options" in filter &&
                  filter.options !== undefined &&
                  filter?.options.map((option) => (
                    <label key={option.value} className="flex items-center gap-2">
                      <input type="checkbox" />
                      {option.value}
                    </label>
                  ))}
              </div>
          
          </div>
        </div>
      ))}
    
    </div>
  );
};

export default ProductDesktopFilter;
