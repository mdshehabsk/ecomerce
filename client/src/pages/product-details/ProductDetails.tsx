import ProductImg from "@images/product/product-1.jpg";

//import all icon

// Import Swiper React components

// Import Swiper styles
import "swiper/css";

const ProductDetailsPage = () => {
  return (
    <>
      <div className="my_container bg-green-400 mx-auto  ">
        <img src={ProductImg} alt="" />
      </div>
    </>
  );
};

export default ProductDetailsPage;
