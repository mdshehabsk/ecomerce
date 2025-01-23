'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper';
SwiperCore.use([Autoplay]);
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
// import required modules
import { Pagination,Navigation,Autoplay} from "swiper/modules";
import SingleProduct from "@/components/Products/SingleProduct";
import { FC, useRef } from "react";

// import react icon

import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import { IProduct } from "@/types/product";
 
interface IProps {
  smartphoneProducts: IProduct[]
}
const Mobile_store : FC<IProps> = ({smartphoneProducts}) => {
    const swiperRef = useRef<any>();
    console.log(smartphoneProducts)
    return (
      <>
         <section className="my-20 relative shadow-md shadow-slate-100 pb-8 " >
         <div className="my_container mx-auto">
          <div className="product_section_one_header flex justify-between flex-wrap">
             <div className="flex items-center" >
             <h1 className="ml-2 font-bold capitalize lg:text-2xl " >The Mobile store</h1>
             </div>
             {/* <div className="flex items-center " >
              <button className="border-2 border-sky-600 px-4 lg:px-8 py-2 text-sky-600 rounded-md hover:text-white hover:bg-sky-600 transition duration-500" >View All</button>
             </div> */}
          </div>
          <div className="w-full h-[1px] bg-slate-300 my-4" ></div>
         <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{clickable:true,el:'.custom-pagination'}}
          modules={[Navigation, Pagination]}
          className="mySwiper "
          slidesPerView={2}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            loop={true}
            >
            {smartphoneProducts?.map(singleProduct => <SwiperSlide key={singleProduct?._id} >
                  <SingleProduct product={singleProduct} />
              </SwiperSlide> )}

           
              <div className="custom-pagination items-center justify-center mt-4 flex gap-2 xl:hidden  "></div>
            </Swiper>
            <div className="hidden xl:block" >
            <div  onClick={() => swiperRef.current?.slidePrev()} className=" group/prev absolute w-[50px] h-[50px] border border-slate-500 flex items-center justify-center rounded-full cursor-pointer left-6 top-[55%] hover:bg-mainBlueColor transition duration-500 ">
              <VscArrowLeft className="text-2xl group-hover/prev:text-white  " />
            </div>
            <div onClick={() => swiperRef.current?.slideNext()} className="group/next absolute w-[50px] h-[50px] border border-slate-500 flex items-center justify-center rounded-full cursor-pointer right-6 top-[55%] hover:bg-mainBlueColor  transition duration-500 ">
              <VscArrowRight className="text-2xl group-hover/next:text-white" />
            </div>
            </div>
         </div>
          </section>
      </>
    )
}

export default Mobile_store