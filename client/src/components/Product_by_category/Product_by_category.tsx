'use client'
import Product_desktop_filter from "../Products/Product_mobile_filter_sort/Product_filter/Product_desktop_filter";
import Product_mobile_filter_sort_nav from "../Products/Product_mobile_filter_sort/Product_mobile_filter_sort_nav";
import categories from '@/categories.json'
import filter from '@/filter.json'
import Image from "next/image";
import Product_desktop_sort from "../Products/Product_mobile_filter_sort/Product_sort/Product_desktop_sort";
import Category_product_item from "../Products/Category_product_item/Category_product_item";
import ProductPaginations from "../Products/ProductPaginations";
import { IProduct } from "@/types/product";
import { FC } from "react";
import bannerImage from '@/images/product/product-banner.jpg';
type TProps = {
  data: {
    meta: {
      totalItems : number
    },
    products : Omit<IProduct,'description | more_info'>[]
  },
  category: string
}
const Product_by_category: FC<TProps> = ({data,category}) => {
  const findCategory = categories?.find(item => item.subCategories?.find(item => item.value === category))
  const findSubCategoryId = findCategory?.subCategories?.find(item => item.value === category)?.id
  const currentFilters = filter?.find(filterItem => filterItem?.id.includes(findSubCategoryId as number))?.filters
  return (
    <>
      <div className="md:hidden">
        <Product_mobile_filter_sort_nav  />
      </div>
      <div className="product-banner hidden md:flex">
        <Image src={bannerImage} alt="no Image" className="w-full" />
      </div>
      <div className="my_container mx-auto md:mt-[50px] mt-[20px] ">
        <div className="flex justify-between md:gap-[40px] ">
          <div className="md:basis-2/12 hidden md:block ">
            <Product_desktop_filter currentFilters={currentFilters} />
          </div>
          <div className="basis-full md:basis-9/12 grow ">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-semibold text-slate-800 capitalize">
                  
                  {category}
                </h2>
                <p className="text-sm">
                  
                  {data?.meta?.totalItems} items in {category}
                </p>
              </div>
              <Product_desktop_sort getCurrentSortItem={(value) => {}} />
            </div>
            <div className="w-full h-px bg-gray-300 my-4"></div>
            <main className=" gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10  ">
              {data?.products?.map((product) => (
                <Category_product_item key={product?._id} product={product} />
              ))}
            </main>
            <div className="flex justify-center my-4">
              <ProductPaginations
                itemPerPage={20}
                totalItems={25}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product_by_category;
