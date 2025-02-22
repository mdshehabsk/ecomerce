"use client";
import Image, { StaticImageData } from "next/image";
import { RxCross2 } from "react-icons/rx";
import Oven from '@/images/slider/oven-102.jpg'
import { FC } from "react";
interface TProps {
  isPopoverOpen: boolean,
  handlePopoverClose : () => void,
  imageUrl: string | StaticImageData
}
const ImagePopover : FC<TProps> = ({
  isPopoverOpen = false,
  handlePopoverClose = () => {},
  imageUrl = Oven 
}) => {
  return (
    <div
      className={`overflow-hidden w-screen h-screen bg-black/70 fixed top-0 left-0 right-0 bottom-0 ${
        isPopoverOpen ? "block" : "hidden"
      } z-[55]`}
    >
      <div className="flex justify-end p-2  ">
        <div className="p-4 lg:mr-10 hover:bg-rose-700 cursor-pointer  " onClick={handlePopoverClose} >
          <RxCross2 className="text-3xl text-white  " />
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
          <Image src={imageUrl}  alt='no image'  width={500}  height={800} />
      </div>
    </div>
  );
};

export default ImagePopover;
