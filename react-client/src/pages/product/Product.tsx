
import Category_product_item from "@components/Products/Category_product_item/Category_product_item";
import Product_desktop_filter from "@components/Products/Product_mobile_filter_sort/Product_filter/Product_desktop_filter";
import Product_mobile_filter_modal from "@components/Products/Product_mobile_filter_sort/Product_filter/Product_mobile_filter_modal";
import Product_mobile_filter_sort_nav from "@components/Products/Product_mobile_filter_sort/Product_mobile_filter_sort_nav";
import Product_desktop_sort from "@components/Products/Product_mobile_filter_sort/Product_sort/Product_desktop_sort";
import Product_mobile_sort_modal from "@components/Products/Product_mobile_filter_sort/Product_sort/Product_mobile_sort_modal";
import bannerImage from '@images/product/product-banner.jpg';
const ProductPage = () => {
  return (
    <>
      <div className="md:hidden">
        <Product_mobile_filter_sort_nav />
        <Product_mobile_filter_modal />
        <Product_mobile_sort_modal />
      </div>
      <div className="product-banner hidden md:flex">
        <Image src={bannerImage} alt="no Image" className="w-full" />
      </div>
      <div className="my_container mx-auto md:mt-[50px] mt-[20px] ">
        <div className="flex justify-between md:gap-[40px] ">
          <div className="md:basis-2/12 hidden md:block ">
            <Product_desktop_filter />
          </div>
          <div className="basis-full md:basis-9/12 grow ">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-semibold text-slate-800">Infinix</h2>
                <p className="text-sm">13 items in infinix</p>
              </div>
              <Product_desktop_sort />
            </div>
            <div className="w-full h-px bg-gray-300 my-4"></div>
            <main className=" gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10  ">
              <Category_product_item />
              <Category_product_item />
              <Category_product_item />
              <Category_product_item />
              <Category_product_item />
              <Category_product_item />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
