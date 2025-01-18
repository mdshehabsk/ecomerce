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
const serializeQuery = (obj: Record<string, string | string[] | undefined>) =>
  Object.entries(obj)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        // Convert arrays into comma-separated strings
        return `${key}=${value.join(',')}`;
      }
      return `${key}=${encodeURIComponent(value as string)}`;
    })
    .join('&');
const getProductsByCategory = async (category: string,queryString : string ) : Promise<IGetProductByCategoryApi> => {
  try {
    const res = await fetch(`http://localhost:3001/api/v1/product/get-products-by-category/${category}?${queryString}`,{cache: 'no-store'})
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
  const queryString = serializeQuery(searchParams);
  const {data} = await getProductsByCategory(category,queryString)
  return (
    <>
      <Product_by_category data={data} category={category} />
    </>
  );
};

export default ProductPage;
