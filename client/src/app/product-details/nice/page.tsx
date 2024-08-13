import React from "react";
import Image from "next/image";
import productOne from "@/images/product/product-1.jpg";
const page = () => {
  return (
    <div>
      <div className="flex">
        <div className="basis-4/12 bg-red-700 md:max-h-vh sticky top-[80px] left-0">
          <div className=" max-w-[300px]   mx-auto flex justify-center ">
            <Image src={productOne} alt="no Image" />
          </div>
          <div className="flex justify-center ">
            <div className="flex gap-4  ">
              <div className=" max-w-[60px] lg:max-w-[100px] cursor-pointer border  border-blue-600  ">
                <Image src={productOne} alt="no Image" />
              </div>
              <div className=" max-w-[60px]  lg:max-w-[100px]  cursor-pointer border border-slate-200 ">
                <Image src={productOne} alt="no Image" />
              </div>
              <div className=" max-w-[60px] lg:max-w-[100px]  cursor-pointer border border-slate-200 ">
                <Image src={productOne} alt="no Image" />
              </div>
              <div className=" max-w-[60px] lg:max-w-[100px]  cursor-pointer border border-slate-200 ">
                <Image src={productOne} alt="no Image" />
              </div>
            </div>
          </div>
        </div>

        <div className="basis-8-12">

        </div>
      </div>
    </div>
  );
};

export default page;
