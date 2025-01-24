import { IProduct } from "@/types/product";
import baseApi from "./baseApi";



const productApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        createProduct : builder.mutation({
            query: (data) => ({
                url: '/product/create-product',
                method: 'POST',
                data
            })
        }),
        searchProducts : builder.query<{data: IProduct[]},string>({
            query: (search) => ({
                url : `/product/get-products-by-search/?name=${search}`,
                method: 'GET'
            })
        })
    })
})

export default productApi

export const {useCreateProductMutation,useSearchProductsQuery} = productApi