import ProductDetails from "@/components/Product_details/ProductDetails";

const getProduct = async (slug: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product/get-single-product/${slug}`,{cache:'no-cache'})
    const {data: product} = await res.json()
    return product
  } catch (error) {
    
  }
}
const ProductDetailsPage = async ({params} : {params:  {slug:string} }) => {

  const product = await getProduct(params.slug)
  return (
   <ProductDetails product={product} />
   
  );
};
export default ProductDetailsPage;
