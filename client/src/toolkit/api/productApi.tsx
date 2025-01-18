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

    })
})

export default productApi

export const {useCreateProductMutation} = productApi