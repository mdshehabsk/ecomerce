'use client'
import React, { useRef, useState } from 'react';
import Image, { StaticImageData } from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination ,Grid} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import Main_product_item from "./Main_product_item";
import SingleProduct from "../Products/SingleProduct";
type Iprops = {
  title: string;
  imageArr: StaticImageData[];
};

const Main_product_section = (props: Iprops) => {
  const { title, imageArr } = props;
  return (
    <section className="my-20 relative shadow-lg pb-8 ">
      <div className="my_container mx-auto">
        <div className="product_section_one_header flex justify-between flex-wrap">
          <div className="flex items-center">
            <h1 className="ml-2 font-bold capitalize lg:text-2xl ">{title}</h1>
          </div>
          <div className="flex items-center ">
            <button className="border-2 border-sky-600 px-4 lg:px-8 py-2 text-sky-600 rounded-md hover:text-white hover:bg-sky-600 transition duration-500">
              View All
            </button>
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-300 my-4"></div>
        <div className="flex gap-6">
<div  className='basis-4/12 hidden md:block overflow-x-hidden ' >
        <Swiper className='h-full' modules={[Pagination]}  autoplay speed={2000}  >
            {imageArr?.map((elem, i) => (
                <SwiperSlide key={Math.random()}>
                  <Image src={elem} alt="no image" className='min-h-full object-cover' />
                </SwiperSlide>
            ))}
            <div className="custom-pagination items-center justify-center mt-4 flex gap-2 xl:hidden  "></div>
          </Swiper>

</div>
        <div className='overflow-hidden basis-full  md:basis-8/12' >
          <Swiper breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                  grid:{
                    rows:2,
                    fill:'row'
                  }
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                    grid:{
                      rows:2,
                      fill:'row'
                    }
                },

              }} pagination={{clickable:true,el:'.custom-pagination'}} modules={[Grid,Pagination]} grid={{rows:2,fill:'row'}} slidesPerView={2} spaceBetween={20} >
            <SwiperSlide  >
              <Main_product_item/>
            </SwiperSlide>
            <SwiperSlide  >
            <Main_product_item/>
            </SwiperSlide>
            <SwiperSlide  >
              <Main_product_item/>
            </SwiperSlide>
            <SwiperSlide  >
            <Main_product_item/>
            </SwiperSlide>
            <SwiperSlide  >
              <Main_product_item/>
            </SwiperSlide>
            <SwiperSlide  >
            <Main_product_item/>
            </SwiperSlide>
            <SwiperSlide >
              <Main_product_item/>
            </SwiperSlide>
            <SwiperSlide  >
            <Main_product_item/>
            </SwiperSlide>
            <div className="custom-pagination items-center justify-center mt-4 flex gap-2 md:hidden  "></div>
          </Swiper>
        </div>
        </div>
        </div>
    </section>
  );
};

export default Main_product_section;
