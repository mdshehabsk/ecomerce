

import { Swiper, SwiperSlide } from "swiper/solid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import SingleProduct from "~/components/Products/SingleProduct";
import Best from "~/images/best.jpg";



// import react icon

import { AiOutlineArrowRight,AiOutlineArrowLeft } from 'solid-icons/ai'


const Product_section_one = () => {
  let swiperRef! : HTMLDivElement;
  return (
    <>
      <section class="my-20 relative shadow-lg pb-8 ">
        <div class="my_container mx-auto">
          <div class="product_section_one_header flex justify-between flex-wrap">
            <div class="flex items-center">
              <img src={Best} alt="no Image" width={50} height={50} />
              <h1 class="ml-2  font-bold capitalize lg:text-2xl ">
                Best selling product
              </h1>
            </div>
            <div class="flex items-center ">
              <a href='/product' class="border-2 border-mainBlueColor px-4 lg:px-6 py-2 text-mainBlueColor rounded-md hover:text-white hover:bg-mainBlueColor transition duration-500">
                View All
              </a>
            </div>
          </div>
          <div class="w-full h-[1px] bg-slate-300 my-4"></div>
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef = swiper;
            }}
            freeMode={true}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            class="mySwiper "
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

            <div class="custom-pagination items-center justify-center mt-4 flex gap-2 xl:hidden  "></div>
          </Swiper>
          <div class="hidden xl:block">
            <div
              onClick={() => swiperRef?.slidePrev()}
              class=" group/prev absolute w-[50px] h-[50px] border border-slate-500 flex items-center justify-center rounded-full cursor-pointer left-6 top-[55%] hover:bg-sky-600 transition duration-500 "
            >
              <AiOutlineArrowLeft class="text-2xl group-hover/prev:text-white  " />
            </div>
            <div
              onClick={() => swiperRef?.slideNext()}
              class="group/next absolute w-[50px] h-[50px] border border-slate-500 flex items-center justify-center rounded-full cursor-pointer right-6 top-[55%] hover:bg-sky-600  transition duration-500 "
            >
              <AiOutlineArrowRight class="text-2xl group-hover/next:text-white" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product_section_one;
