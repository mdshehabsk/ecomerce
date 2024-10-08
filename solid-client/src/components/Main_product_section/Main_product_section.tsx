'use client'

import { Swiper, SwiperSlide } from "swiper/solid";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import Main_product_item from "./Main_product_item";
type Iprops = {
  title: string;
  ImageArr: any[];
};

const Main_product_section = (props: Iprops) => {
  const { title, ImageArr } = props;
  return (
    <section class="my-20 relative shadow-lg pb-8 ">
      <div class="my_container mx-auto">
        <div class="product_section_one_header flex justify-between flex-wrap">
          <div class="flex items-center">
            <h1 class="ml-2 font-bold capitalize lg:text-2xl ">{title}</h1>
          </div>
          <div class="flex items-center ">
            <button class="border-2 border-mainBlueColor px-4 lg:px-8 py-2 text-mainBlueColor rounded-md hover:text-white hover:bg-mainBlueColor transition duration-500">
              View All
            </button>
          </div>
        </div>
        <div class="w-full h-[1px] bg-slate-300 my-4"></div>
        <div class="flex gap-6">
          <div class="basis-4/12 hidden md:block overflow-x-hidden ">
            <Swiper
              class="h-full"
              autoplay
              speed={2000}
            >
              {ImageArr?.map((elem) => (
                <SwiperSlide key={Math.random()}>
                  <img
                    src={elem}
                    alt="no Image"
                    class="min-h-full object-cover"
                  />
                </SwiperSlide>
              ))}
              <div class="custom-pagination items-center justify-center mt-4 flex gap-2 xl:hidden  "></div>
            </Swiper>
          </div>
          <div class="overflow-hidden basis-full  md:basis-8/12">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                  grid: {
                    rows: 2,
                    fill: "row",
                  },
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                  grid: {
                    rows: 2,
                    fill: "row",
                  },
                },
              }}
              pagination={{ clickable: true, el: ".custom-pagination" }}
              grid={{ rows: 2, fill: "row" }}
              slidesPerView={2}
              spaceBetween={20}
            >
              <SwiperSlide>
                <Main_product_item />
              </SwiperSlide>
              <SwiperSlide>
                <Main_product_item />
              </SwiperSlide>
              <SwiperSlide>
                <Main_product_item />
              </SwiperSlide>
              <SwiperSlide>
                <Main_product_item />
              </SwiperSlide>
              <SwiperSlide>
                <Main_product_item />
              </SwiperSlide>
              <SwiperSlide>
                <Main_product_item />
              </SwiperSlide>
              <SwiperSlide>
                <Main_product_item />
              </SwiperSlide>
              <SwiperSlide>
                <Main_product_item />
              </SwiperSlide>
              <div class="custom-pagination items-center justify-center mt-4 flex gap-2 md:hidden  "></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main_product_section;
