// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import OfferSliderItem from "./OfferSliderItem";

function Offer() {
  return (
    <>
      <section className="offer_category mt-10 mb-5">
        <div className="my_container mx-auto">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={{
              800: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <OfferSliderItem />
            </SwiperSlide>
            <SwiperSlide>
              <OfferSliderItem />
            </SwiperSlide>
            <SwiperSlide>
              <OfferSliderItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Offer;
