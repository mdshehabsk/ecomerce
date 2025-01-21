"use client";

import { AiOutlineStar } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import Image from "next/image";
import { RiFullscreenLine } from "react-icons/ri";
import { useMemo, useState } from "react";
import Review from "./Review";
import ImagePopover from "../Image_popover/ImagePopover";
import React from "react";
import { IProduct } from "@/types/product";



const ProductDetails: React.FC<{product: IProduct}> = ({product}) => {
  const [quantity,setQuantity] = useState(1)
  const [isExpandInfo, setIsExpandInfo] = useState(false);
  const [imagePopoverOpen, setImagePopoverOpen] = useState(false);
  const [currentImage,setCurrentImage] = useState(product?.imageArr?.[0])
  const handleImagePopover = () => {
    setImagePopoverOpen(!imagePopoverOpen);
  };
  const handleToggleExpandInfo = () => {
    setIsExpandInfo(!isExpandInfo);
  };

  const handleCurrentImage = (image:string) => {
    setCurrentImage(image)
  }

  const description = useMemo(() =>     <div dangerouslySetInnerHTML={{__html: product?.description}} ></div> , [product?.description] )
  return (
        <div className="bg-gray-50  ">
          <div className="my-container mx-auto bg-white xs  ">
            <div className="flex flex-wrap justify-between ">
              <div className="  p-3 basis-full md:basis-5/12 lg:basis-4/12 md:sticky top-[80px] left-0 max-h-[92vh]">
                <div className="relative  md:h-full flex flex-col ">
                  <div className="mx-auto md:h-full w-full flex justify-center items-center relative ">
                    <RiFullscreenLine className="absolute top-0 right-0 text-2xl cursor-pointer" onClick={handleImagePopover} />
                    <Image src={currentImage } alt="no Image" width={400} height={400} />
                   
                  </div>
                  <div className="flex justify-center items-baseline md:block bottom-0 md:h-[120px] w-full ">
                    <div className="flex gap-1 justify-center w-full ">
                      {
                        product?.imageArr?.map((singleImage,ind) =>  <div onClick={() => handleCurrentImage(singleImage)}  key={ind} className=" max-w-[80px]  lg:max-w-[110px] cursor-pointer border  border-blue-600  ">
                          <Image src={singleImage} alt="no Image" width={100} height={100} />
                        </div> )
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border-t py-3 md:border-l border-neutral-300 mt-1 basis-full md:basis-7/12 grow overflow-hidden ">
                <h1 className="text-2xl  font-semibold px-3">
                  {product?.name}
                </h1>
                <div className="flex my-2 items-center gap-3 border-y py-2 px-3 ">
                  <div className="flex items-center gap-2 bg-orangeColor text-white px-2 py-2 rounded-sm ">
                    <p className="text-sm">4.8</p>
                    <AiOutlineStar className="text-sm" />
                  </div>
                  <div>
                    <p className="text-sm  font-light ">(50)</p>
                  </div>
                </div>
                {/* brand */}
                <div className="flex gap-3 border-b py-2 px-3">
                  <p className="font-semibold">Brand:</p>
                  <span className="text-mainBlueColor">Xiaomi</span>
                </div>
                {/* price */}
                <div className="mt-2 flex items-center gap-4 py-2 border-b px-3 ">
                  <div>
                    <h3 className="font-semibold text-mainBlueColor text-xl md:text-2xl ">
                      ৳ {(product?.base_price / 100) * (100 - product?.discount)}
                    </h3>
                  </div>
                  <div>
                    <del className="md:text-lg font-normal  ">20,000</del>
                  </div>
                    {product?.discount > 0 ? <div className=" p-2 px-3 bg-slate-100 rounded ">
                    <p className=" text-sm md:text-base"> -{product.discount} %</p> 
                  </div> : null }
                  
                </div>
                {/* quantity */}
                <div className="flex items-center gap-2 my-2 px-3 ">
                  <div>
                    <p className=" text-black text-base ">Quantity :</p>
                  </div>
                  <div className="flex border border-slate-200  ">
                    <button onClick={()=> setQuantity( prev => Math.max(1,prev - 1) )} className="font-bold text-xl  border-r py-2 px-4  ">
                      -
                    </button>
                    <div className="flex py-2 px-4 ">
                      <p> {quantity} </p>
                    </div>
                    <button onClick={()=> setQuantity(prev => prev + 1)}  className="font-bold text-xl  border-l py-2 px-4  ">
                      +
                    </button>
                  </div>
                </div>
                {/* buy the product */}
                <div className="flex gap-2 md:gap-6 items-center border-y py-2 px-3   ">
                  <div className="flex justify-center font-medium basis-[200px] p-3 gap-3 items-center border  hover:bg-mainBlueColor hover:text-white transition active:translate-y-1 cursor-pointer  ">
                    <IoBagHandleOutline />
                    <button className="text-sm">Add to Cart</button>
                  </div>
                  <div className="flex basis-[200px] justify-center items-center bg-orangeColor hover:bg-transparent hover:border-orangeColor border hover:text-orangeColor  text-white p-3 font-medium  gap-3  transition active:translate-y-1 cursor-pointer ">
                    <CiShoppingCart />
                    <button className="text-sm">Buy now</button>
                  </div>
                </div>
                {/* more information */}
                <div
                  className={`mt-5 ${
                    isExpandInfo ? "max-h-fit" : "max-h-[400px]"
                  }   overflow-hidden  px-3 `}
                >
                  <h2 className="font-semibold">More Information</h2>
                  {product?.more_info?.map((singleInfo) =>  <React.Fragment key={singleInfo.value} >
                    <div  className="flex items-center gap-3   py-2 my-2 text-sm  ">
                    <p
                      className="font-semibold
        "
                    >
                      {singleInfo.key} :
                    </p>
                    <span> {singleInfo?.value} </span>
                  </div>
                  <hr/>
                  </React.Fragment> )}
                  <hr/>
                {description}
                </div>
                <div className="flex justify-center py-2 px-3 ">
                  <button
                    className="bg-transparent text-orangeColor text-sm font-medium "
                    onClick={handleToggleExpandInfo}
                  >
                    {isExpandInfo ? "READ LESS" : "READ MORE"}{" "}
                  </button>
                </div>
                <Review />
              </div>
            </div>
          </div>
          <ImagePopover handlePopoverClose={handleImagePopover} isPopoverOpen={imagePopoverOpen} imageUrl={currentImage} />
        </div>
  );
};

export default ProductDetails;
