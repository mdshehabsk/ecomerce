import ProductDetails from "@/components/Product_details/ProductDetails";

const getProduct = async () => {
  try {
    const res = await fetch('http://localhost:3001/api/v1/product/get-single-product/' + 'realme-c75-24gb-(8gb+16gb)-256gb',{cache: 'no-cache'})
    const {data: product} = await res.json()
    return product
  } catch (error) {
    
  }
}
const ProductDetailsPage = async () => {
  const product = await getProduct()

  return (
   <ProductDetails product={product} />
   
  );
};
export default ProductDetailsPage;
