import Oven from "@images/slider/oven-102.jpg";
import { AiOutlineStar } from "react-icons/ai";
const Category_product_item = () => {
  return (
    <>
      <div className="border border-gray-200 p-2 py-4  ">
        <div className="flex justify-center overflow-hidden ">
          <Image
            src={Oven}
            alt="no Image"
            className="hover:scale-105 transition duration-300"
          />
        </div>
        <h3 className="text-sm font-medium">Techno camon 20 Cksrns 8/18GB</h3>
        <div className="flex items-center ">
          <span className="text-sm text-sky-600">৳</span>
          <p className="text-sm text-sky-600 font-semibold">20,000</p>
          <del className="ml-3 text-sm">৳20,000</del>
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
