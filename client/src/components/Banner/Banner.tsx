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
import bannerOne from "@images/banner-1.jpg";
import bannerTwo from "@images/banner-2.jpg";
import bannerThree from "@images/banner-3.jpg";
import bannerFour from "@images/banner-4.jpg";
import BannerLeft from "./BannerLeft";

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
            className="mySwiper basis-full lg:basis-3/4 "
            autoplay
          >
            <SwiperSlide>
              <img
                src={bannerOne}
                alt="no image"
                className="min-h-[200px] xs:min-h-[250px] h-full "
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={bannerTwo}
                alt="no image"
                className="min-h-[200px] xs:min-h-[250px] h-full "
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={bannerThree}
                alt="no image"
                className="min-h-[200px] xs:min-h-[250px] h-full "
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={bannerFour}
                alt="no image"
                className="min-h-[200px] xs:min-h-[250px] h-full "
              ></img>
            </SwiperSlide>

          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Banner;
