"use client";
// Import Swiper React components

import { Swiper, SwiperSlide  } from "swiper/solid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules


// import react icon

// all iamge import
import bannerOne from "~/images/banner-1.jpg";
import bannerTwo from "~/images/banner-2.jpg";
import bannerThree from "~/images/banner-3.jpg";
import bannerFour from "~/images/banner-4.jpg";
import BannerLeft from "./BannerLeft";




function Banner() {

  return (
    <>
      <section>
        <div class="flex ">
          <BannerLeft />
          <Swiper
            pagination={{ clickable: true}}
            
            class="mySwiper basis-full lg:basis-8/12 grow "
            autoplay
          >
            <SwiperSlide>
              <img
                src={bannerOne}
                alt="no Image"
                class="min-h-[200px] xs:min-h-[250px] h-full "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={bannerTwo}
                alt="no Image"
                class="min-h-[200px] xs:min-h-[250px] h-full "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={bannerThree}
                alt="no Image"
                class="min-h-[200px] xs:min-h-[250px] h-full "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={bannerFour}
                alt="no Image"
                class="min-h-[200px] xs:min-h-[250px] h-full "
              />
            </SwiperSlide>

          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Banner;
