'use client'

import { useAppDispatch, useAppSelector } from "@/toolkit/hook";
import { mobileFilterModalToggle } from "@/toolkit/slice/ProductSortAndFilter";
import React, { useState , FC, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ProductDesktopFilter from "./Product_desktop_filter";
import { BsChevronDown, BsFillPlayCircleFill } from "react-icons/bs";
import filter from '@/filter.json'
import { useSearchParams } from "next/navigation";


type TProps = {
  initialFilters: (typeof filter)[number]["filters"];
  getCurrentFilters: (
    args0: Record<string, string[] | string | number | (string | number)[]>
  ) => void;

};
const Product_mobile_filter_modal : FC<TProps> = ({getCurrentFilters,initialFilters}) => {
  const dispatch = useAppDispatch();
  const { filterIsModal } = useAppSelector(
    (state) => state.ProductSortAndFilter
  );

  const searchParams = useSearchParams();
  const [filters, setFilters] = useState(
    initialFilters?.map((currentFilterItem) => ({
      ...currentFilterItem,
      isOpen: true,
      options: currentFilterItem?.options?.map((optionsItem) => ({
        value: optionsItem,
        checked: false,
      })),
    }))
  );
  const [priceSectionOpen, setPriceSectionOpen] = useState(true);
  const [filterPrice, setFilterPrice] = useState<{ min: string; max: string }>({
    min: "",
    max: "",
  });
  const [priceSubmit, setPriceSubmit] = useState(false);
  const toggleSection = (filterItem: (typeof filters)[number]) => {
    const newArray = filters.map((item) => {
      if (item.value === filterItem.value) {
        return {
          ...item,
          isOpen: !item.isOpen,
        };
      }
      return item;
    });
    setFilters(newArray);
  };
  const handleCheckboxChange = (
    filter: (typeof filters)[number],
    option: (typeof filters)[number]["options"][number]
  ) => {
    const newFilter = filters?.map((filterItem) => {
      if (filterItem?.value === filter.value) {
        return {
          ...filterItem,
          options: filterItem?.options?.map((optionItem) => {
            if (optionItem.value === option.value) {
              return {
                ...optionItem,
                checked: !option?.checked,
              };
            }
            return optionItem;
          }),
        };
      }
      return filterItem;
    });

    setFilters(newFilter);
  };

  useEffect(() => {
    const obj: Record<
      string,
      string[] | string | number | (string | number)[]
    > = {};

    if (filterPrice.min) {
      obj.min = filterPrice?.min;
    }
    if (filterPrice?.max) {
      obj.max = filterPrice?.max;
    }
    filters?.forEach((filter) => {
      obj[filter.value] = filter.options
        ?.filter((option) => option?.checked)
        .map((mapedOption) => mapedOption.value);
    });
    if (getCurrentFilters) {
      getCurrentFilters(obj);
    }
  }, [priceSubmit, filters, priceSubmit]);

  useEffect(() => {
    setFilters(prev => prev.map(item => {
      const value = searchParams.getAll(item.value);
      const array = item.options?.map((option) => {
        if (value.includes(option.value.toString())) {
          return {
            ...option,
            checked: true,
          };
        } else {
          return option;
        }
      });

      return {
        ...item,
        options: array,
      };
    } ))
    const minPrice = searchParams.get('min')
    const maxPrice = searchParams.get('max')
    setFilterPrice({min: minPrice as string,max: maxPrice as string})
  }, [searchParams]);
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
              onChange={(event) =>
                setFilterPrice((prev) => ({ ...prev, min: event.target.value }))
              }
            />
            </div>
           <div className="grow" >
           <input
              type="number"
               placeholder="max"
              className="text-center py-2 outline-none border border-black/40 w-full  "
              value={filterPrice?.max}
              onChange={(event) =>
                setFilterPrice((prev) => ({ ...prev, max: event.target.value }))
              }
            />
           </div>
          </div>
          <button className="py-2 px-4 bg-orangeColor text-white rounded"  onClick={()=> setPriceSubmit(!priceSubmit)} >
            Apply
          </button>
        </div>
      </div>
      {filters.map((filter, ind) => (
        <div key={filter.label} className="my-4 px-2 py-1 shadow">
          {/* Section Header */}
          <div
            onClick={() => toggleSection(filter)}
            className="flex justify-between items-center cursor-pointer"
          >
            <span className="text-black font-semibold">{filter.label}</span>
            <BsChevronDown />
          </div>

          {/* Section Content */}
          <div
            className={`${
              filter.isOpen ? "h-auto" : "h-0 overflow-y-hidden"
            } transition-[height] duration-300 flex flex-col gap-2 my-2`}
          >

              <div className="flex flex-col gap-2  ">
                {filter?.options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-2"
                 
                >
                  <input type="checkbox" checked={option.checked}  onChange={() => handleCheckboxChange(filter, option)} />
                  {option.value}
                </label>
              ))}
              </div>
      
          </div>
        </div>
      ))}

  
      </div>
    </div>
  );
};

export default Product_mobile_filter_modal;
