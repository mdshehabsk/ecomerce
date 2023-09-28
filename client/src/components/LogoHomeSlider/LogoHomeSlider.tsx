
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import LogoSliderItem from "./LogoSliderItem";


//all image import
import delivary from '@images/logoHomeSlider/delivary.png'
import emi from '@images/logoHomeSlider/EMI.png'
import Return from '@images/logoHomeSlider/return.png'
import warranty from '@images/logoHomeSlider/warranty.png'
import temp from "@images/logoHomeSlider/temp.png"
import payment from '@images/logoHomeSlider/payment.png'

const LogoHomeSlider = () => {
  return (
    <>
      <section className="bg-white shadow-sm ">
        <div className="my_container mx-auto pb-8 pt-4 ">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 5,
                spaceBetween: 5,
              },

              1024: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <LogoSliderItem image={delivary} name="3 Hours Delivary"  />
            </SwiperSlide>
            <SwiperSlide>
            <LogoSliderItem image={emi} name="UP TO 36 MONTH EMI"  />
            </SwiperSlide>
            <SwiperSlide>
              <LogoSliderItem image={Return} name="easy return" />
            </SwiperSlide>
            <SwiperSlide>
              <LogoSliderItem  image={warranty} name="100% genuine product "  />
            </SwiperSlide>
            <SwiperSlide>
              <LogoSliderItem image={payment} name="secure payment"  />
            </SwiperSlide>
            <SwiperSlide>
              <LogoSliderItem image={temp} name="warrenty covarage" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default LogoHomeSlider;
