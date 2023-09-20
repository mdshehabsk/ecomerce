"use client";

// import react icon
import { AiOutlineCloseCircle } from "react-icons/ai";

import { useAppDispatch, useAppSelector } from "@/toolkit/hook";
import { mobileSortModalToggle } from "@/toolkit/slice/ProductSortAndFilter";

const Product_mobile_sort_modal = () => {
  const { sortIsModal } = useAppSelector((state) => state.ProductSortAndFilter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div
        className={`bg-black bg-opacity-60 w-full h-full ${
          sortIsModal ? "bottom-0" : "-bottom-[1000px]"
        } fixed z-[99]  `}
      >
        <div className="w-full  bg-white absolute bottom-0 rounded-t-3xl  ">
          <div className="flex m-4 justify-between items-center ">
            <h2 className="font-medium">Sort By</h2>
            <div onClick={() => dispatch(mobileSortModalToggle())}>
              <AiOutlineCloseCircle />
            </div>
          </div>
          <div className="w-full h-px bg-gray-200 "></div>
          <div className="flex flex-wrap -mr-4">
            <div className="w-full px-4 py-1">
              <input
                type="radio"
                id="newest_first"
                name="sort_by"
                className="mr-2 "
              />
              <label
                className=" text-opacity-30 "
                htmlFor="newest_first"
              >
                Newest First
              </label>
            </div>
            <div className="w-full px-4 py-1">
              <input
                type="radio"
                id="oldest_first"
                name="sort_by"
                className="mr-2 "
              />
              <label
                className=" text-opacity-30 "
                htmlFor="oldest_first"
              >
                Oldest First
              </label>
            </div>

            <div className="w-full px-4 py-1">
              <input
                type="radio"
                id="name_az"
                name="sort_by"
                className="mr-2"
              />
              <label
                className=" text-opacity-30 "
                htmlFor="name_az"
              >
                Name A to Z
              </label>
            </div>
            <div className="w-full px-4 py-1">
              <input
                type="radio"
                id="name_za"
                name="sort_by"
                className="mr-2"
              />
              <label
                className=" text-opacity-30 "
                htmlFor="name_za"
              >
                Name Z to A
              </label>
            </div>
            <div className="w-full px-4 py-1">
              <input
                type="radio"
                id="price_high_low"
                name="sort_by"
                className="mr-2  focus:bg-orange-500 "
              />
              <label
                className=" text-opacity-30 "
                htmlFor="price_high_low"
              >
                Price High to Low
              </label>
            </div>
            <div className="w-full px-4 py-1">
              <input
                type="radio"
                id="price_low_high"
                name="sort_by"
                className="mr-2 "
              />
              <label
                className=" text-opacity-30 "
                htmlFor="price_low_high"
              >
                Price Low to High
              </label>
            </div>
            <div className="w-full px-4 py-1">
              <input
                type="radio"
                id="position"
                name="sort_by"
                className="mr-2  "
              />
              <label
                className=" text-opacity-30 "
                htmlFor="position"
              >
                Position
              </label>
            </div>
            <div className="w-full px-4 py-1">
              <input
                type="radio"
                id="express_delivery"
                name="sort_by"
                className="mr-2 "
              />
              <label
                className=" text-opacity-30 "
                htmlFor="express_delivery"
              >
                Express Delivery
              </label>
            </div>
          </div>
          <div className="w-full my-2 px-4 flex justify-center ">
            <button className="bg-orange-500  text-white font-semibold w-full py-3 rounded-md ">
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product_mobile_sort_modal;
