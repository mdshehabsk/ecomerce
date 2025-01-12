'use server'
import Category_product_item from "@/components/Products/Category_product_item/Category_product_item";
import Product_desktop_filter from "@/components/Products/Product_mobile_filter_sort/Product_filter/Product_desktop_filter";
import Product_mobile_filter_modal from "@/components/Products/Product_mobile_filter_sort/Product_filter/Product_mobile_filter_modal";
import Product_mobile_filter_sort_nav from "@/components/Products/Product_mobile_filter_sort/Product_mobile_filter_sort_nav";
import Product_desktop_sort from "@/components/Products/Product_mobile_filter_sort/Product_sort/Product_desktop_sort";
import Product_mobile_sort_modal from "@/components/Products/Product_mobile_filter_sort/Product_sort/Product_mobile_sort_modal";
import ProductPaginations from "@/components/Products/ProductPaginations";
import bannerImage from '@/images/product/product-banner.jpg';
import { IProduct } from "@/types/product";
import Image from "next/image";
import Product_by_category from "@/components/Product_by_category/Product_by_category";
interface IGetProductByCategoryApi {
  success: boolean,
  message: string
  statusCode: number
  data: {
    meta: {
      totalItems : number
    },
    products : Omit<IProduct,'description | more_info'>[]
  },
}

const getProductsByCategory = async (category: string,page : string | undefined ) : Promise<IGetProductByCategoryApi> => {
  try {
    const res = await fetch(`http://localhost:3001/api/v1/product/get-products-by-category/${category}?page=${page}&limit=20`,{cache: 'no-store'})
    const data = await res.json()
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }
    return data
  } catch (error) {
    throw new Error('Unable to fetch products by category.');
  }
}

const ProductPage = async ({params,searchParams}:{params: {category: string},searchParams: {[key:string]: string  | undefined}} ) => {
  const {category} = params
  const {page} = searchParams
  const {data} = await getProductsByCategory(category,page)
  return (
    <>
      {/* <div className="md:hidden">
        <Product_mobile_filter_sort_nav />
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
                <h2 className="font-semibold text-slate-800 capitalize"> {category} </h2>
                <p className="text-sm"> {data?.meta?.totalItems}  items in {category} </p>
              </div>
              <Product_desktop_sort getCurrentSortItem={(value)=> {}} />
            </div>
            <div className="w-full h-px bg-gray-300 my-4"></div>
            <main className=" gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10  ">
              {
               data?.products?.map((product) =>  <Category_product_item key={product?._id} product={product} /> )
              }

            </main>
            <div className="flex justify-center my-4">
            <ProductPaginations itemPerPage={20} totalItems={data?.meta?.totalItems} />
            </div>
          </div>
        </div>
      </div> */}
      <Product_by_category data={data} category={category} />
    </>
  );
};

export default ProductPage;
