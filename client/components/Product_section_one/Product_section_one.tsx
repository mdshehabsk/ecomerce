'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
// import required modules
import { Pagination,Navigation} from "swiper";
import Image from "next/image";
import Best from '@/images/best.jpg'
import SingleProduct from "../Products/SingleProduct";
import { useRef } from "react";

// import react icon

import {GrNext} from 'react-icons/gr' 
import {GrPrevious} from 'react-icons/gr' 
const Product_section_one = () => {
  const swiperRef = useRef<any>();
  return (
    <>
       <section className="my-20 relative shadow-lg pb-8 " >
       <div className="my_container mx-auto">
        <div className="product_section_one_header flex justify-between flex-wrap">
           <div className="flex items-center" >
           <Image src={Best} alt="no image" width={50} height={50}  />
           <h1 className="ml-2 font-bold capitalize lg:text-2xl " >Best selling product</h1>
           </div>
           <div className="flex items-center " >
            <button className="border-2 border-sky-600 px-4 lg:px-8 py-2 text-sky-600 rounded-md hover:text-white hover:bg-sky-600 transition duration-500" >View All</button>
           </div>
        </div>
        <div className="w-full h-[1px] bg-slate-300 my-4" ></div>
       <Swiper
        cssMode={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        // pagination={{clickable:true}}
        modules={[Navigation, Pagination]}
        className="mySwiper "
        slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 5,
              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >
          
            <SwiperSlide>
                <SingleProduct/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct/>
            </SwiperSlide>
         
          
          </Swiper>
          <div className="hidden xl:block" >
          <div  onClick={() => swiperRef.current?.slidePrev()} className="absolute w-[50px] h-[50px] border border-slate-500 flex items-center justify-center rounded-full cursor-pointer left-6 top-[55%] hover:bg-sky-600 text-white transition duration-500 ">
            <GrPrevious className="text-2xl text-white " />
          </div>
          <div   onClick={() => swiperRef.current?.slideNext()} className="absolute w-[50px] h-[50px] border border-slate-500 flex items-center justify-center rounded-full cursor-pointer right-6 top-[55%] hover:bg-sky-600 text-white transition duration-500 ">
            <GrNext className="text-2xl text-white " />
          </div>
          </div>
       </div>
        </section>
    </>
  )
}

export default Product_section_one