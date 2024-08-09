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

const Product_mobile_filter_sort = () => {
  const dispatch = useAppDispatch();
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
    </div>
  );
};

export default Product_mobile_filter_sort;
