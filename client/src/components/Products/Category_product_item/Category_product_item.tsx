import Oven from "@/images/slider/oven-102.jpg";
import { AiOutlineStar } from "react-icons/ai";
import Image from "next/image";
import { IProduct } from "@/types/product";

type TProps = {
  product : Omit<IProduct,'more_info' | 'description'>
}
const Category_product_item = ({product}: TProps) => {
  
  return (
    <>
      <div className="border border-gray-200 p-2 py-4 relative ">
        <div className=" text-xs absolute right-0 top-0 bg-orangeColor text-white px-3 py-1 rounded-bl z-10 " >
          {product?.discount}%
        </div>
        <div className="flex justify-center overflow-hidden ">
          <Image
            src={product?.imageArr[0]}
            alt="no Image"
            className="hover:scale-105 transition duration-300"
            width={200}
            height={200}
          />
        </div>
        <h3 className="  font-medium"> {product?.name} </h3>
        <div className="flex items-center ">
          <span className="text-sm text-sky-600">৳</span>
          <p className="text-sm text-sky-600 font-semibold">  {(product?.base_price / 100) * 100 - product?.discount} </p>
          <del className="ml-3 text-sm">৳  {product?.base_price} </del>
        </div>
        <div className=" flex items-center gap-1">
          <div className="flex">
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
          <div>
            <p className="text-sm">(4)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category_product_item;
