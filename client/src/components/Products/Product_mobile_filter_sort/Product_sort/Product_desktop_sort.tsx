"use client";
import { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
const sortingItems = [
  { label: "Newest First", value: "newest_first" },
  { label: "Oldest First", value: "oldest_first" },
  { label: "Name A to Z", value: "name_a_to_z" },
  { label: "Name Z to A", value: "name_z_to_a" },
  { label: "Price High to Low", value: "price_high_to_low" },
  { label: "Price Low to High", value: "price_low_to_high" },
  { label: "Express Delivery", value: "express_delivery" },
  { label: "Position", value: "position" },
] as const;

type TSortingItemValue = (typeof sortingItems)[number]['value']
type TSortingItemLabel = (typeof sortingItems)[number]['label']

type TSortingItem = {
  label: TSortingItemLabel,
  value: TSortingItemValue
}
type TProps = {
  getCurrentSortItem : (arg0: TSortingItemValue | undefined) => void
}


const defaultProps = {
  getCurrentSortItem: () => {},
};

const Product_desktop_sort = ({getCurrentSortItem}:TProps) => {
  const [showSortMenu, setShowSortMenu] = useState(false);;
  const [currentSortItem, setCurrentSortItem] = useState<TSortingItem >()
  const SortBtnClick = () => {
    setShowSortMenu((prev) => !prev);
  };
  const handleSortingItem = (sortingItem: TSortingItem) => {
    setShowSortMenu((prev) => !prev);
    setCurrentSortItem(sortingItem)
  }

  useEffect(()=> {
     getCurrentSortItem(currentSortItem?.value);
  },[currentSortItem,getCurrentSortItem])


  return (
    <div className="md:flex items-center gap-1 hidden ">
      {showSortMenu && (
        <div
          onClick={SortBtnClick}
          className="w-full h-full absolute top-0 left-0"
        ></div>
      )}
      <div>
        <h4 className="font-light">Sort By :</h4>
      </div>
      <div className="relative">
        <div
          onClick={SortBtnClick}
          className="  border border-gray-300 py-2 px-3 min-w-[200px] flex flex-wrap justify-between items-center cursor-pointer"
        >
          <p className=" cursor-pointer   font-light  " > {currentSortItem ? currentSortItem.label : 'Default'} </p>
          <AiFillCaretDown />
        </div>

        <ul
          className={` ${
            showSortMenu ? "block" : "hidden"
          }  z-50 basis-full absolute top-full left-0 border border-gray-300 w-full bg-white `}
        >
          {sortingItems?.map((sortingItem, ind) => (
            <li onClick={()=> handleSortingItem(sortingItem)} key={ind} className=" cursor-pointer hover:text-orangeColor px-2 py-1 my-1 hover:bg-slate-100 font-light transition duration-150 ">
              {sortingItem.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Product_desktop_sort.defaultProps = defaultProps;

export default Product_desktop_sort;
