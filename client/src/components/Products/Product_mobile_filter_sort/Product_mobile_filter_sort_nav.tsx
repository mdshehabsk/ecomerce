'use client'
import { useAppDispatch } from "@/toolkit/hook";
// import react icon
import { AiOutlineFilter } from "react-icons/ai";
import { BsSortDown } from "react-icons/bs";

// rtk action import
import {
  mobileFilterModalToggle,
  mobileSortModalToggle,
} from "@/toolkit/slice/ProductSortAndFilter";
import Product_mobile_sort_modal from '../Product_sort/Product_mobile_sort_modal';
import Product_mobile_filter_modal from "../Product_filter/Product_mobile_filter_modal";

import filter from "@/filter.json";
import { FC } from "react";


type TProps = {
    initialFilters: (typeof filter)[number]["filters"];
    getCurrentFilters: (
      args0: Record<string, string[] | string | number | (string | number)[]>
    ) => void;
    getCurrentSortItem : (name: string) => void
}

const Product_mobile_filter_sort_nav : FC<TProps> = ({getCurrentFilters,getCurrentSortItem,initialFilters}) => {
  const dispatch = useAppDispatch();

  function getSelectedSortValue(value: string) {
    if(getCurrentSortItem){
      getCurrentSortItem(value)
    }
  }
  return (
    <div className="flex ">
      <div
        onClick={() => dispatch(mobileSortModalToggle())}
        className="basis-1/2 flex justify-center gap-1  items-center shadow-md py-2 "
      >
        <BsSortDown className="text-xl" />
        <p>Sort</p>
      </div>
      <div
        onClick={() => dispatch(mobileFilterModalToggle())}
        className="basis-1/2 flex justify-center gap-1  items-center shadow-md py-2 "
      >
        <AiOutlineFilter className="text-xl" />
        <p>Filter</p>
      </div>
      <Product_mobile_sort_modal getSelectedSortValue={getSelectedSortValue}  />
      <Product_mobile_filter_modal  initialFilters={initialFilters} getCurrentFilters={getCurrentFilters} />
    </div>
  );
};

export default Product_mobile_filter_sort_nav;
