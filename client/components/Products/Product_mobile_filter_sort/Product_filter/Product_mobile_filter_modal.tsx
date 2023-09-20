"use client";

import { useAppDispatch, useAppSelector } from "@/toolkit/hook";
import { mobileFilterModalToggle } from "@/toolkit/slice/ProductSortAndFilter";
import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillPlayCircleFill } from "react-icons/bs";

type FilterSectionType =
  | "price"
  | "ram"
  | "processor"
  | "expressDelivary"
  | "color";

type FilterValueType = {
  price: {
    min: undefined | number;
    max: undefined | number;
  };
  ram: {
    count: null | number;
    checkedItems: {} | { [key: string]: boolean };
  };
};

const Product_mobile_filter_modal = () => {
  const dispatch = useAppDispatch();
  const { filterIsModal } = useAppSelector(
    (state) => state.ProductSortAndFilter
  );
  const [filterSection, setFilterSection] =
    useState<FilterSectionType>("price");
  const [filterValue, setFilterValue] = useState<FilterValueType>({
    price: {
      min: undefined,
      max: undefined,
    },
    ram: {
      count: null,
      checkedItems: {},
    },
  });
  const filterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue({
      ...filterValue,
      price: {
        ...filterValue.price,
        [e.target.name]: e.target.value,
      },
    });
  };
  return (
    <>
      <div
        className={`bg-white w-full h-screen ${
          filterIsModal ? "bottom-0" : "-bottom-[1000px]"
        } fixed z-[99] transition-all duration-500 `}
      >
        <div className="bg-sky-600 flex items-center px-2 py-3 gap-2 ">
          <AiOutlineArrowLeft
            onClick={() => dispatch(mobileFilterModalToggle())}
            className="text-xl text-white"
          />
          <p className="text-white text-xl">Filter</p>
        </div>
        <div className="flex gap-3 ">
          <div className="basis-4/12  bg-gray-100 ">
            <div
              onClick={() => setFilterSection("price")}
              className={`product_filter_item ${
                filterSection === "price" && "bg-orange-500 text-white"
              } `}
            >
              Price
            </div>
            <div
              onClick={() => setFilterSection("ram")}
              className={`product_filter_item ${
                filterSection === "ram" && "bg-orange-500 text-white"
              } `}
            >
              RAM(GB)
            </div>
            <div
              onClick={() => setFilterSection("processor")}
              className={`product_filter_item ${
                filterSection === "processor" && "bg-orange-500 text-white"
              } `}
            >
              Processor
            </div>
            <div
              onClick={() => setFilterSection("expressDelivary")}
              className={`product_filter_item ${
                filterSection === "expressDelivary" &&
                "bg-orange-500 text-white"
              } `}
            >
              Express Delivery
            </div>
            <div
              onClick={() => setFilterSection("color")}
              className={`product_filter_item ${
                filterSection === "color" && "bg-orange-500 text-white"
              } `}
            >
              Color
            </div>
          </div>
          <div className="px-2 py-3 grow ">
            {(() => {
              if (filterSection === "price") {
                return (
                  <div className="flex gap-2 flex-wrap ">
                    <input
                      name="min"
                      value={filterValue.price.min}
                      type="number"
                      placeholder="min"
                      min={0}
                      className=" product_filter_price_box "
                      onChange={filterInputChange}
                    />

                    <input
                      name="max"
                      value={filterValue.price.max}
                      type="number"
                      placeholder="max"
                      className=" product_filter_price_box  "
                      onChange={filterInputChange}
                    />
                    <button className="border border-orange-500 p-2 rounded-md ">
                      <BsFillPlayCircleFill className="text-orange-500 text-lg  " />
                    </button>
                  </div>
                );
              } else if (filterSection === "ram") {
                return (
                  <div className="ram">
                    <div className="flex gap-2">
                      <div className="flex gap-2">
                        <div>
                          <input type="checkbox" id="3" />
                        </div>
                      </div>
                      <label htmlFor="3">3GB</label>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <input type="checkbox" id="4" />
                      </div>
                      <label htmlFor="4">4GB</label>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <input type="checkbox" id="6" />
                      </div>
                      <label htmlFor="6">6GB</label>
                    </div>
                  </div>
                );
              } else if (filterSection === "processor") {
                return (
                  <div className="processor">
                    <div className="flex gap-2">
                      <div>
                        <input type="checkbox" id="3" />
                      </div>
                      <label htmlFor="3"> Mediatek Hello A22 </label>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <input type="checkbox" id="4" />
                      </div>
                      <label htmlFor="4">MediaTek helio G88</label>
                    </div>
                    <div className="flex gap-2 font-light">
                      <div className="flex gap-2">
                        <div>
                          <input type="checkbox" id="6" />
                        </div>
                      </div>
                      <label htmlFor="6">MediaTek Helio G96 Ultra Gaming</label>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <input type="checkbox" id="6" />
                      </div>
                      <label htmlFor="6">Helio A22</label>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <input type="checkbox" id="6" />
                      </div>
                      <label htmlFor="6">Helio G37</label>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <input type="checkbox" id="6" />
                      </div>
                      <label htmlFor="6">MediaTek Helio G99</label>
                    </div>
                  </div>
                );
              } else if (filterSection === "expressDelivary") {
                return (
                  <div className="express-delivary">
                    <div className="flex gap-2">
                      <div>
                        <input type="checkbox" id="expre</div>ss-delivary" />{" "}
                      </div>
                      <label htmlFor="express-delivary">Express Delivary</label>
                    </div>
                  </div>
                );
              } else if (filterSection === "color") {
                return <div className="color"></div>;
              }
            })()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product_mobile_filter_modal;
