"use client";
import React, { FC, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/toolkit/hook";
import { mobileSortModalToggle } from "@/toolkit/slice/ProductSortAndFilter";
import { AiOutlineCloseCircle } from "react-icons/ai";

const sortOptions = [
  { label: "Newest First", value: "newest_first" },
  { label: "Oldest First", value: "oldest_first" },
  { label: "Name A to Z", value: "name_az" },
  { label: "Name Z to A", value: "name_za" },
  { label: "Price High to Low", value: "price_high_low" },
  { label: "Price Low to High", value: "price_low_high" },
  { label: "Position", value: "position" },
  { label: "Express Delivery", value: "express_delivery" },
];
type TProps = {
  getSelectedSortValue : (args0: string) => void
}
const Product_mobile_sort_modal : FC<TProps> = ({getSelectedSortValue}) => {
  const { sortIsModal } = useAppSelector((state) => state.ProductSortAndFilter);
  const dispatch = useAppDispatch();

  const [selectedSort, setSelectedSort] = useState<string>("");
  const [finalselectedSort, setFinalSelectedSort] = useState<string>("");
  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSort(event.target.value);
  };

  const handleSortSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFinalSelectedSort(selectedSort)
    dispatch(mobileSortModalToggle());
  };
  useEffect(()=> {
    if(getSelectedSortValue){
      getSelectedSortValue(finalselectedSort)
    }
  },[finalselectedSort,getSelectedSortValue])
  return (
    <>
      <div
        className={`bg-black bg-opacity-60 w-full h-full ${
          sortIsModal ? "bottom-0" : "-bottom-[1000px]"
        } fixed z-[99]`}
      >
        <div className="w-full bg-white absolute bottom-0 rounded-t-3xl">
          <div className="flex m-4 justify-between items-center">
            <h2 className="font-medium">Sort By</h2>
            <div onClick={() => dispatch(mobileSortModalToggle())}>
              <AiOutlineCloseCircle />
            </div>
          </div>
          <div className="w-full h-px bg-gray-200"></div>

          <form onSubmit={handleSortSubmit}>
            {sortOptions.map((sortItem, ind) => (
              <div key={ind} className="w-full px-4 py-1">
                <input
                  type="radio"
                  id={sortItem.value}
                  name="sort_by"
                  value={sortItem.value}
                  className="mr-2"
                  onChange={handleSortChange}
                  checked={selectedSort === sortItem.value}
                />
                <label className="text-opacity-30" htmlFor={sortItem.value}>
                  {sortItem.label}
                </label>
              </div>
            ))}
            <div className="w-full my-2 px-4 flex justify-center">
              <button
                type="submit"
                className="bg-orange-500 text-white font-semibold w-full py-3 rounded-md"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Product_mobile_sort_modal;
