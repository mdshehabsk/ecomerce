"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
const sortingItems = [
  { label: "Newest First", value: "date-1" },
  { label: "Oldest First", value: "date1" },
  { label: "Name A to Z", value: "name1" },
  { label: "Name Z to A", value: "name-1" },
  { label: "Price High to Low", value: "price-1" },
  { label: "Price Low to High", value: "price1" },
] as const;



type TSortingItem = {
  label: string,
  value: string
}
type TProps = {
  getCurrentSortItem : (arg0:  string ) => void
}



const Product_desktop_sort = ({getCurrentSortItem }:TProps) => {
  const searchParams = useSearchParams();
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [currentSortItem, setCurrentSortItem] = useState<TSortingItem >()
  const SortBtnClick = () => {
    setShowSortMenu((prev) => !prev);
  };
  const handleSortingItem = (sortingItem: TSortingItem) => {
    setShowSortMenu((prev) => !prev);
    setCurrentSortItem(sortingItem)
  }

  useEffect(()=> {
    if(getCurrentSortItem && currentSortItem) {
      getCurrentSortItem(currentSortItem.value);
    }
  },[currentSortItem])

  useEffect(()=> {
    const value = searchParams.get('sort')
    const currentSortItem = sortingItems?.find(item => item.value === value)
    if(currentSortItem){
      setCurrentSortItem(currentSortItem)
    }
  },[searchParams])
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
            <li onClick={()=> handleSortingItem(sortingItem)} key={ind} className={`cursor-pointer hover:text-orangeColor px-2 py-1 my-1 hover:bg-slate-100 font-light transition duration-150 ${currentSortItem?.value === sortingItem?.value ? 'text-orangeColor' : null} `}>
              {sortingItem.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};



export default Product_desktop_sort;
