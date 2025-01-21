import baseApi from "./baseApi";



const cartApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        addCartItem : builder.mutation({
            query : (data) => ({
                url : `/cart/add-cart-item`,
                data,
                method : 'POST',
            })
        }),
        getCarts : builder.query({
            query : () => ({
                url : '/cart/get-carts'
            })
        })

    })
})

export default cartApi

export const {useAddCartItemMutation} = cartApi