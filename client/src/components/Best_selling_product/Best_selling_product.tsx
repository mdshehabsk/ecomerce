'use client'
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Autoplay]);
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import SingleProduct from "@/components/Products/SingleProduct";
import Best from "@/images/best.jpg";
import { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
// import react icon

import { BiSkipNextCircle, BiSkipPreviousCircle } from "react-icons/bi";
import Link from "next/link";
const Product_section_one = () => {
  const swiperRef = useRef<any>();
  return (
    <>
      <section className="my-20 relative shadow-md shadow-slate-100 pb-8 ">
        <div className="my_container mx-auto">
          <div className="product_section_one_header flex justify-between flex-wrap">
            <div className="flex items-center">
              <Image src={Best} alt="no Image" width={50} height={50} />
              <h1 className="ml-2  font-bold capitalize lg:text-2xl ">
                Best selling product
              </h1>
            </div>
            <div className="flex items-center ">
              <Link href='/product' className="border-2 border-mainBlueColor px-4 lg:px-6 py-2 text-mainBlueColor rounded-md hover:text-white hover:bg-mainBlueColor transition duration-500">
                View All
              </Link>
            </div>
          </div>
          <div className="w-full h-[1px] bg-slate-300 my-4"></div>
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            freeMode={true}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            modules={[Navigation, Pagination]}
            className="mySwiper "
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <SingleProduct />
            </SwiperSlide>
            <SwiperSlide>
              <SingleProduct />
            </SwiperSlide>
            <SwiperSlide>
              <SingleProduct />
            </SwiperSlide>
            <SwiperSlide>
              <SingleProduct />
            </SwiperSlide>
            <SwiperSlide>
              <SingleProduct />
            </SwiperSlide>
            <SwiperSlide>
              <SingleProduct />
            </SwiperSlide>

            <div className="custom-pagination items-center justify-center mt-4 flex gap-2 xl:hidden  "></div>
          </Swiper>
          <div className="hidden xl:block">
            <div
              onClick={() => swiperRef.current?.slidePrev()}
              className=" group/prev absolute w-[50px] h-[50px] border border-slate-500 flex items-center justify-center rounded-full cursor-pointer left-6 top-[55%] hover:bg-sky-600 transition duration-500 "
            >
              <BiSkipPreviousCircle className="text-2xl group-hover/prev:text-white  " />
            </div>
            <div
              onClick={() => swiperRef.current?.slideNext()}
              className="group/next absolute w-[50px] h-[50px] border border-slate-500 flex items-center justify-center rounded-full cursor-pointer right-6 top-[55%] hover:bg-sky-600  transition duration-500 "
            >
              <BiSkipNextCircle className="text-2xl group-hover/next:text-white" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product_section_one;
