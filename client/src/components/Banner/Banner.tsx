"use client";
// Import Swiper React components
import SwiperCore from "swiper";
import { Swiper, SwiperSlide  } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination,Autoplay } from "swiper/modules";

// import react icon

// all iamge import
import bannerOne from "@/images/banner-1.jpg";
import bannerTwo from "@/images/banner-2.jpg";
import bannerThree from "@/images/banner-3.jpg";
import bannerFour from "@/images/banner-4.jpg";
import BannerLeft from "./BannerLeft";


import Image from "next/image";

function Banner() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <section>
        <div className="flex ">
          <BannerLeft />
          <Swiper
            pagination={{ clickable: true}}
            modules={[Pagination]}
            className="mySwiper basis-full lg:basis-8/12 grow "
            autoplay
          >
            <SwiperSlide>
              <Image
                src={bannerOne}
                alt="no Image"
                className="min-h-[200px] xs:min-h-[250px] h-full "
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={bannerTwo}
                alt="no Image"
                className="min-h-[200px] xs:min-h-[250px] h-full "
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={bannerThree}
                alt="no Image"
                className="min-h-[200px] xs:min-h-[250px] h-full "
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={bannerFour}
                alt="no Image"
                className="min-h-[200px] xs:min-h-[250px] h-full "
              ></Image>
            </SwiperSlide>

          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Banner;
