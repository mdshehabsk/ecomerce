'use server'

import { IProduct } from "@/types/product";

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
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product/get-products-by-category/${category}?${queryString}`,{cache: 'no-store'})
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
