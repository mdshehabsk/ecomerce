import SliderOne from "@/images/slider/slider-1.jpg";
import SliderTwo from "@/images/slider/slider-2.jpg";
import SliderThree from "@/images/slider/slider-3.jpg";
import SliderFour from "@/images/slider/slider-4.jpg";
import SliderFive from "@/images/slider/slider-5.jpg";
import SliderSix from "@/images/slider/slider-6.jpg";
import Brand_directory from "@/components/Brand_directory/Brand_directory";

import Banner from "@/components/Banner/Banner";
import Recent_product from "@/components/Best_selling_product/Best_selling_product";
import LogoHomeSlider from "@/components/LogoHomeSlider/LogoHomeSlider";
import Offer from "@/components/Offer/Offer";
import Mobile_store from "@/components/Mobile_store/Mobile_store";
import Main_product_section from "@/components/Main_product_section/Main_product_section";


async function getMainProducts() {
  try {
    const res = await fetch('http://localhost:3001/api/v1/product/get-main-product',{cache:'no-cache'})
    const {data: products} = await res.json()
    return products
  } catch (error) {
    
  }
}

export default async function Home() {
  const products = await getMainProducts()

  return (
    <>
      <Banner />
      <LogoHomeSlider />
      {/* <Offer /> */}
      <Recent_product recentProducts={products?.recenentProducts}  />
      <Mobile_store smartphoneProducts={products?.smartphones} />
      <Main_product_section
        title="Electronics & Appliances"
        ImageArr={[SliderOne, SliderTwo]}
        products={products?.electronicsProducts}
      />
      <Main_product_section
        title="Gadgets"
        ImageArr={[SliderThree, SliderFive]}
        products={products?.gadgetProducts}
      />
      <Main_product_section
        title="Laptop & Tab"
        ImageArr={[SliderFour, SliderSix]}
        products={products?.computersProducts}
      />
      <Main_product_section
        title="Lifestyle"
        ImageArr={[SliderFive, SliderTwo]}
        products={products?.lifestyleProducts}
      /> 
       <Brand_directory />
    </>
  );
}
