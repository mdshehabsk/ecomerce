'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IoMdStar } from 'react-icons/io';
import productOne from '@/images/product/product-1.jpg';
import ImagePopover from '../Image_popover/ImagePopover';

const SingleReview = () => {
  const [imagePopoverOpen, setImagePopoverOpen] = useState(false);

  const handleImageClick = () => {
    setImagePopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setImagePopoverOpen(false);
  };

  const thumbnails = [productOne, productOne, productOne, productOne];

  return (
    <>
      <div className="p-3 border-zinc-300">
        <div className="flex gap-1">
          <div className="w-[60px] rounded-full">
            <Image src={productOne} alt="no image" width={60} height={60} />
          </div>
          <div className="flex flex-col gap-1 grow">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-normal">Shehab Uddin</h3>
              <span className="text-xs font-light text-black/60">
                13th Aug 2024
              </span>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <IoMdStar key={index} className="text-orangeColor text-sm" />
              ))}
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure fuga
              nostrum tenetur, pariatur hic totam delectus repellendus iste id
              aut!
            </p>
          </div>
        </div>
        <div className="flex my-2 gap-1">
          {thumbnails.map((thumb, index) => (
            <div
              key={index}
              className="w-[80px] h-[80px] border border-black/10 cursor-pointer"
              onClick={handleImageClick}
            >
              <Image src={thumb} alt={`Thumbnail ${index + 1}`} width={80} height={80} />
            </div>
          ))}
        </div>
        <ImagePopover
          isPopoverOpen={imagePopoverOpen}
          handlePopoverClose={handlePopoverClose}
          imageUrl={productOne}
        />
      </div>
    </>
  );
};

export default SingleReview;
