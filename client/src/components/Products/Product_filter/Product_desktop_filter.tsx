"use client";
import { FC, useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import filter from "@/filter.json";
import React from "react";
import { useSearchParams } from "next/navigation";

type Tprops = {
  initialFilters: (typeof filter)[number]["filters"];
  getCurrentFilters: (
    args0: Record<string, string[] | string | number | (string | number)[]>
  ) => void;

};
const ProductDesktopFilter: FC<Tprops> = ({
  initialFilters,
  getCurrentFilters,
}) => {
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
  const handleCheckboxClick = (
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
  return (
    <div className="">
      <h2 className="text-3xl text-gray-900">Filter</h2>
      <div className="w-full h-px bg-gray-300 my-2"></div>
      <div className="my-4 px-2 py-1 shadow">
        {/* Section Header */}
        <div
          onClick={() => setPriceSectionOpen(!priceSectionOpen)}
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
              name="min"
              onChange={(event) =>
                setFilterPrice((prev) => ({ ...prev, min: event.target.value }))
              }
            />
            <input
              type="number"
              className="text-center py-2 outline-none border border-black/40  w-[140px]  "
              value={filterPrice?.max}
              placeholder="max"
              name="max"
              onChange={(event) =>
                setFilterPrice((prev) => ({ ...prev, max: event.target.value }))
              }
            />
          </div>
          <button
            className="py-2 px-4 bg-orangeColor text-white rounded"
            onClick={()=> setPriceSubmit(!priceSubmit)}
          >
            Apply
          </button>
        </div>
      </div>
      {filters?.map((filter, ind) => (
        <div key={ind} className="my-4 px-2 py-1 shadow">
          <div
            onClick={() => toggleSection(filter)}
            className="flex justify-between items-center cursor-pointer"
          >
            <span className="text-black font-semibold capitalize">
              {filter?.label}
            </span>
            <BsChevronDown />
          </div>
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
                  <input type="checkbox" checked={option.checked}  onChange={() => handleCheckboxClick(filter, option)} />
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
