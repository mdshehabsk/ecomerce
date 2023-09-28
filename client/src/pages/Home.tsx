import SliderOne from '@images/slider/slider-1.jpg'
import SliderTwo from '@images/slider/slider-2.jpg'
import SliderThree from '@images/slider/slider-3.jpg'
import SliderFour from '@images/slider/slider-4.jpg'
import SliderFive from '@images/slider/slider-5.jpg'
import SliderSix from '@images/slider/slider-6.jpg'
import Brand_directory from "@components/Brand_directory/Brand_directory";

import Banner from "@components/Banner/Banner";
import Best_selling_product from "@components/Best_selling_product/Best_selling_product";
import LogoHomeSlider from "@components/LogoHomeSlider/LogoHomeSlider";
import Offer from "@components/Offer/Offer";
import Mobile_store from "@components/Mobile_store/Mobile_store";
import Main_product_section from '@components/Main_product_section/Main_product_section'


export default function Home() {
  return (
    <>
      <Banner />
      <LogoHomeSlider />
      <Offer />
      <Best_selling_product />
      <Mobile_store />
      <Main_product_section
        title="Electronics & Appliances"
        imageArr={[SliderOne, SliderTwo]}
      />
      <Main_product_section
        title="Gadgets"
        imageArr={[SliderThree, SliderFive]}
      />
      <Main_product_section
        title="Laptop & Tab"
        imageArr={[SliderFour, SliderSix]}
      />
      <Main_product_section
        title="Lifestyle"
        imageArr={[SliderFive, SliderTwo]}
      />
      <Brand_directory />
    </>
  );
}


