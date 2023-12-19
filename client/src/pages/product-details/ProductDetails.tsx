import productOne from "@images/product/product-1.jpg";
import { AiOutlineStar } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5"
const ProductDetailsPage = () => {
  return (
    <div className="bg-gray-50 pt-5 min-h-full ">
      <div className="container mx-auto bg-white  ">
        <div className="flex flex-wrap justify-between ">
          <div className=" p-3 basis-full md:basis-5/12 ">
            <div className=" max-w-[300px] md:max-w-max  mx-auto flex justify-center ">
              <img src={productOne} alt="no image" />
            </div>
            <div className="flex justify-center ">
              <div className="flex gap-4  ">
                <div className=" max-w-[60px] cursor-pointer border  border-blue-600  ">
                  <img src={productOne} alt="no image" />
                </div>
                <div className=" max-w-[60px] cursor-pointer border border-slate-200 ">
                  <img src={productOne} alt="no image" />
                </div>
                <div className=" max-w-[60px] cursor-pointer border border-slate-200 ">
                  <img src={productOne} alt="no image" />
                </div>
                <div className=" max-w-[60px] cursor-pointer border border-slate-200 ">
                  <img src={productOne} alt="no image" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t md:border-l border-neutral-300 mt-1 basis-full md:basis-7/12 p-3  ">
            <h1 className="text-xl  font-semibold ">
              Amazfit Pop 3S AMOLED Bluetooth Calling Smart Watch Global Version
            </h1>
            <div className="flex my-2 items-center gap-3 border-y py-2  ">
              <div className="flex items-center gap-2 bg-orangeColor text-white px-2 py-2 rounded-sm ">
                <p className="text-sm">4.8</p>
                <AiOutlineStar className="text-sm" />
              </div>
              <div>
                <p className="text-sm  font-light ">(50)</p>
              </div>
            </div>
            {/* brand */}
            <div className="flex gap-3 border-b py-2 ">
              <p className="font-semibold">Brand:</p>
              <span className="text-mainBlueColor">Xiaomi</span>
            </div>
            {/* price */}
            <div className="mt-2 flex items-center gap-4 py-2 border-b ">
              <div>
                <h3 className="font-semibold text-mainBlueColor text-xl md:text-2xl ">
                  ৳ 31,900
                </h3>
              </div>
              <div>
                <del className="md:text-lg font-normal  ">20,000</del>
              </div>
              <div className=" p-2 px-3 bg-slate-100 rounded ">
                <p className=" text-sm md:text-base">-25%</p>
              </div>
            </div>
            {/* quantity */}
            <div className="flex items-center gap-2 my-2 " >
              <div>
                <p className=" text-base  opacity-70 " >Quantity :</p>
              </div>
              <div className="flex border border-slate-200  " >
                <button className="font-bold text-xl  border-r py-2 px-4  " >-</button>
                <div className="flex py-2 px-4 " >
                  <p>1</p>
                </div>
                <button className="font-bold text-xl  border-l py-2 px-4  " >+</button>
              </div>
            </div>
            {/* buy the product */}
            <div className="flex gap-2 md:gap-6 items-center border-y py-2   ">
            <div className="flex w-[150px] p-3 gap-3 items-center border  hover:bg-mainBlueColor hover:text-white transition active:translate-y-1  " >
            <IoBagHandleOutline />
              <button className="text-sm" >Add to Cart</button>
            </div>
            <div className="flex justify-center items-center bg-mainBlueColor w-[150px] text-white p-3  gap-3 hover:opacity-80  transition active:translate-y-1 cursor-pointer " >
            <CiShoppingCart/>
              <button className="text-sm"  >Buy now</button>
            </div>
            </div>
            {/* more information */}
            <div className="mt-5" >
              <h2 className="font-semibold" >More Information</h2>
              <div className="flex items-center gap-3  border-y py-2 my-2 text-sm  " >
        <p className="font-semibold
        " >Type : </p> <span> Refrigaretor</span>
              </div>
              <div className="flex items-center gap-3  border-y py-2 my-2 text-sm  " >
        <p className="font-semibold
        " >Emi available : </p> <span> 2 Years official warrenty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
export default ProductDetailsPage;
