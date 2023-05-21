"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

// import react icon


// all iamge import
import bannerOne from "../../../images/banner-1.jpg";
import bannerTwo from "../../../images/banner-2.jpg";
import bannerThree from "../../../images/banner-3.jpg";
import bannerFour from "../../../images/banner-4.jpg";
import Image from "next/image";
import BannerLeft from "./BannerLeft";


function Banner() {
  return (
    <>
      <div  >
        <div className="flex max-h-[400px]">
          <BannerLeft/>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper basis-full min-h-[250px] lg:basis-3/4  "
          >
            <SwiperSlide>
              <Image src={bannerOne} alt="no image" fill={true}></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={bannerTwo} alt="no image" fill={true}></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={bannerThree} alt="no image" fill={true}></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={bannerFour} alt="no image" fill={true}></Image>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Banner;
